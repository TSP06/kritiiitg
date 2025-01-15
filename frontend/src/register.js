import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { jwtDecode } from 'jwt-decode'; 
import './register.css'; // Use named import
import {client} from './sanityClient'
import axios from 'axios';


const Register = () => {
  const { title, category } = useParams();  // Get title and category from URL
  const [userName, setUserName] = useState('');
  const [members, setMembers] = useState();
  const navigate = useNavigate(); // To redirect user if role is not user
const [registration, setRegistration] = useState(null);
  const categoryParticipants = {
    highprep: 8,
    midprep: 6,
    lowprep: 4,
    noprep: 2,
  };





  const initialData = Array.from({ length: categoryParticipants[category] }, () => ({
    name: "",
    phoneNumber: "",
    emailId: "",
    department: "",
    programme: "",
    year:null
  }));

  const [membersNew, setMembersNew] = useState( Array.from({ length: categoryParticipants[category] }, () => ({
    name: "",
    phoneNumber: "",
    emailId: "",
    department: "",
    programme: "",
    year:null
  })));  // initialize with your initial data


  

  const categoryRoute = {
    highprep: "highps",
    midprep: "midps",
    lowprep: "lowps",
    noprep: "noprepps",
  }

  const handleClick = () => {
    navigate("/"+categoryRoute[category]);
  };

  const numberOfMembers = categoryParticipants[category] || 0;

  useEffect(() => {
    // Extract token from local storage
    const token = localStorage.getItem('userToken');
    if (token) {
      try {
        // Decode the token
        const decodedToken = jwtDecode(token);
        
        // Check if the user's role is 'user'
        if (decodedToken.role === 'user') {
          setUserName(decodedToken.name);  // Assuming 'name' is stored in the token
          console.log(userName)
        } else {
          // Redirect to another page (e.g., login or homepage) if role is not user
          navigate('/login');  // Redirect to login if role is not 'user'
        }
      } catch (err) {
        console.error("Error decoding token", err);
        navigate('/login');  // Redirect to login if token is invalid
      }
    } else {
      // Redirect to login if no token exists
      navigate('/login');
    }
  }, [navigate]);

  const getCategoryMessage = (category) => {
    switch (category) {
      case 'highprep':
        return (
          <>
          
            <span>(8 members required)</span>
          </>
        );
      case 'midprep':
        return (
          <>
         
            <span>(6 members required)</span>
          </>
        );
      case 'lowprep':
        return (
          <>
          
            <span>(4 members required)</span>
          </>
        );
      case 'noprep':
        return (
          <>
         
            <span>(2 members required)</span>
          </>
        );
      default:
        return <span>0</span>;
    }
  };
  const addMember = (name, phone, email, department,programme, year) => {
    const newMember = {
      name,
      phone,
      email,
      department,
      programme,
      year,
    };
    setMembers([...members, newMember]);
  };
  

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'highprep':
        return (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" viewBox="0 0 32 31" fill="none">
  <path d="M27.751 9.30527L27.751 10.0259C27.751 11.5015 26.5548 12.6977 25.0792 12.6977L16.6137 12.6977C15.1381 12.6977 13.9419 11.5015 13.9419 10.0259L13.9419 2.67183C13.9419 1.19622 12.7457 3.19174e-07 11.2701 3.43634e-07L2.777 4.84422e-07C1.31222 5.08703e-07 0.120531 1.17938 0.10532 2.64409L0.0280364 10.0857C0.0126002 11.5721 1.21326 12.7853 2.69972 12.7853L11.2037 12.7853C12.6793 12.7853 13.8755 13.9815 13.8755 15.4571L13.8755 23.3042C13.8755 24.4592 12.9392 25.3955 11.7842 25.3955C10.6292 25.3955 9.69295 26.3318 9.69295 27.4868L9.69295 28.8755C9.69295 30.0488 10.6441 31 11.8174 31C12.9907 31 13.9419 30.0488 13.9419 28.8755L13.9419 28.1549C13.9419 26.6793 15.1381 25.4831 16.6137 25.4831L25.1456 25.4831C26.6212 25.4831 27.8174 24.2868 27.8174 22.8112L27.8174 14.8766C27.8174 13.7216 28.7537 12.7853 29.9087 12.7853C31.0637 12.7853 32 11.849 32 10.694L32 9.30527C32 8.13195 31.0488 7.18079 29.8755 7.18079C28.7022 7.18079 27.751 8.13195 27.751 9.30527Z" fill="#D39251"/>
</svg>
            
          </>
        );
      case 'midprep':
        return (
          <>
           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" viewBox="0 0 32 31" fill="none">
  <path d="M27.751 9.30527L27.751 10.0259C27.751 11.5015 26.5548 12.6977 25.0792 12.6977L16.6137 12.6977C15.1381 12.6977 13.9419 11.5015 13.9419 10.0259L13.9419 2.67183C13.9419 1.19622 12.7457 3.19174e-07 11.2701 3.43634e-07L2.777 4.84422e-07C1.31222 5.08703e-07 0.120531 1.17938 0.10532 2.64409L0.0280364 10.0857C0.0126002 11.5721 1.21326 12.7853 2.69972 12.7853L11.2037 12.7853C12.6793 12.7853 13.8755 13.9815 13.8755 15.4571L13.8755 23.3042C13.8755 24.4592 12.9392 25.3955 11.7842 25.3955C10.6292 25.3955 9.69295 26.3318 9.69295 27.4868L9.69295 28.8755C9.69295 30.0488 10.6441 31 11.8174 31C12.9907 31 13.9419 30.0488 13.9419 28.8755L13.9419 28.1549C13.9419 26.6793 15.1381 25.4831 16.6137 25.4831L25.1456 25.4831C26.6212 25.4831 27.8174 24.2868 27.8174 22.8112L27.8174 14.8766C27.8174 13.7216 28.7537 12.7853 29.9087 12.7853C31.0637 12.7853 32 11.849 32 10.694L32 9.30527C32 8.13195 31.0488 7.18079 29.8755 7.18079C28.7022 7.18079 27.751 8.13195 27.751 9.30527Z" fill="#D4B9FF"/>
</svg>
           
          </>
        );
      case 'lowprep':
        return (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" viewBox="0 0 32 31" fill="none">
  <path d="M27.751 9.30527L27.751 10.0259C27.751 11.5015 26.5548 12.6977 25.0792 12.6977L16.6137 12.6977C15.1381 12.6977 13.9419 11.5015 13.9419 10.0259L13.9419 2.67183C13.9419 1.19622 12.7457 3.19174e-07 11.2701 3.43634e-07L2.777 4.84422e-07C1.31222 5.08703e-07 0.120531 1.17938 0.10532 2.64409L0.0280364 10.0857C0.0126002 11.5721 1.21326 12.7853 2.69972 12.7853L11.2037 12.7853C12.6793 12.7853 13.8755 13.9815 13.8755 15.4571L13.8755 23.3042C13.8755 24.4592 12.9392 25.3955 11.7842 25.3955C10.6292 25.3955 9.69295 26.3318 9.69295 27.4868L9.69295 28.8755C9.69295 30.0488 10.6441 31 11.8174 31C12.9907 31 13.9419 30.0488 13.9419 28.8755L13.9419 28.1549C13.9419 26.6793 15.1381 25.4831 16.6137 25.4831L25.1456 25.4831C26.6212 25.4831 27.8174 24.2868 27.8174 22.8112L27.8174 14.8766C27.8174 13.7216 28.7537 12.7853 29.9087 12.7853C31.0637 12.7853 32 11.849 32 10.694L32 9.30527C32 8.13195 31.0488 7.18079 29.8755 7.18079C28.7022 7.18079 27.751 8.13195 27.751 9.30527Z" fill="#A5CDF1"/>
</svg>
           
          </>
        );
      case 'noprep':
        return (
          <>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" viewBox="0 0 32 31" fill="none">
  <path d="M27.751 9.30527L27.751 10.0259C27.751 11.5015 26.5548 12.6977 25.0792 12.6977L16.6137 12.6977C15.1381 12.6977 13.9419 11.5015 13.9419 10.0259L13.9419 2.67183C13.9419 1.19622 12.7457 3.19174e-07 11.2701 3.43634e-07L2.777 4.84422e-07C1.31222 5.08703e-07 0.120531 1.17938 0.10532 2.64409L0.0280364 10.0857C0.0126002 11.5721 1.21326 12.7853 2.69972 12.7853L11.2037 12.7853C12.6793 12.7853 13.8755 13.9815 13.8755 15.4571L13.8755 23.3042C13.8755 24.4592 12.9392 25.3955 11.7842 25.3955C10.6292 25.3955 9.69295 26.3318 9.69295 27.4868L9.69295 28.8755C9.69295 30.0488 10.6441 31 11.8174 31C12.9907 31 13.9419 30.0488 13.9419 28.8755L13.9419 28.1549C13.9419 26.6793 15.1381 25.4831 16.6137 25.4831L25.1456 25.4831C26.6212 25.4831 27.8174 24.2868 27.8174 22.8112L27.8174 14.8766C27.8174 13.7216 28.7537 12.7853 29.9087 12.7853C31.0637 12.7853 32 11.849 32 10.694L32 9.30527C32 8.13195 31.0488 7.18079 29.8755 7.18079C28.7022 7.18079 27.751 8.13195 27.751 9.30527Z" fill="#9AE5B0"/>
</svg>
           
          </>
        );
      default:
        return <span>0</span>;
    }
  };

  const handleInputChangeName = (e, index) => {
    e.preventDefault();
    console.log(e.target.value)
    //const updatedMembers = [...membersNew];  // Create a copy of the original array
      // Create a new copy of the membersNew array to ensure immutability
  const updatedMembers = [...membersNew];  // Shallow copy of the array

  // Modify the name of the member at the specific index
  updatedMembers[index].name = e.target.value;

  // Update the state with the new array
  setMembersNew(updatedMembers);  // Use the state setter to trigger a re-render

  // Log the updated state
  console.log(updatedMembers);
   
  };

  const handleInputChangePhone = (e, index) => {
    //const updatedMembers = [...membersNew];  // Create a copy of the original array
    membersNew[index].phoneNumber = e.target.value;  // Modify the specific field dynamically
  
     // Update the state with the modified array
    
    // Log the updated state
    console.log(membersNew);
   
  };

  const handleInputChangeEmail = (e, index) => {
    //const updatedMembers = [...membersNew];  // Create a copy of the original array
    membersNew[index].emailId =  e.target.value;  // Modify the specific field dynamically
  
     // Update the state with the modified array
    
    // Log the updated state
    console.log(membersNew);
   
  };

  const handleInputChangeDepartment = (e, index) => {
    //const updatedMembers = [...membersNew];  // Create a copy of the original array
    membersNew[index].department =  e.target.value;  // Modify the specific field dynamically
  
     // Update the state with the modified array
    
    // Log the updated state
    console.log(membersNew);
   
  };

  const handleInputChangeYear = (e, index) => {
    //const updatedMembers = [...membersNew];  // Create a copy of the original array
    membersNew[index].year = e.target.value;  // Modify the specific field dynamically
  
     // Update the state with the modified array
    
    // Log the updated state
    console.log(membersNew);
   
  };

  const handleInputChangeProgramme = (e,index) => {
    //const updatedMembers = [...membersNew];  // Create a copy of the original array
    membersNew[index].programme = e.target.value;  // Modify the specific field dynamically
  
     // Update the state with the modified array
    
    // Log the updated state
    console.log(membersNew);
  }


 const newRegistartion = {
    title:userName,
    category:category,
    ps:title,
   membersNew
 };


    useEffect(() => {
  const fetchRegistration = async () => {
    console.log(userName);
    try {
      const response = await axios.get(
        `https://kritibackend.onrender.com/api/register/fetch/${encodeURIComponent(userName)}/${encodeURIComponent(title)}`
      );
      setRegistration(response.data?.data || []);
    } catch (err) {
      console.error("Error fetching registration data:", err);
      
    }
  };

  if (userName && title) { // Only fetch if userName and title are valid
    fetchRegistration();
  }
}, [userName, title]);


  console.log(registration);
 const handleSubmit = async (e) => {
    // Ensure setMembers is being used correctly in your component
console.log(userName)
    e.preventDefault();
    setMembers(membersNew);
    console.log(newRegistartion)
    console.log("function called");
  
    try {
        console.log('trying')
      const response = await axios.post('https://kritibackend.onrender.com/api/register', 
        {newRegistartion} // Ensure this is defined correctly elsewhere
      );
  console.log("tried");
      console.log(response);
      alert('Registered');
      
      // After successful registration, navigate to a different route
      navigate("/" + categoryRoute[category]); // Navigate based on selected category
      
    } catch (err) {
      console.error(err);  // Log the error in the console for better debugging
      alert('Unsuccessful registration');
    }
    
   
  
    console.log("members added");
    
    // If `members` is state, logging it immediately after setMembers is async, so it's better to log after an update
    console.log(members);
  
    // If needed to create document after registration
    // createDocument(userName, category, title, members);
    // console.log(newDocument);
    // createSanityDocument(newDocument, null);
  };
  

 /* const createSanityDocument = async ({ userName, category, title, members }) => {
    try {
      // Check the payload
      console.log('Payload being sent:', {
        mutations: [
          {
            create: {
              _type: 'registration',
              title: userName,
              category,
              ps: title,
              members,
            },
          },
        ],
      });


  
      const response = await client.post(
        'https://bfkthwsi.api.sanity.io/v1/data/mutate/production',
        {
          mutations: [
            {
              create: {
                _type: 'registration',
                title: userName,
                category,
                ps: title,
                members,
              },
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer skbcNpCWEPK0eah4R0eBjISANO23dZROJ4HKk9dWvNVkUxb8oLmnA705YQc0aECvzRlmR9G4DlSFLqNnSvxqH8FJ1gsv0Ei1RYVuQukRIUJxoWZon7JmiqEGTh9mcod6vynuyevYgSnaGc2XO0ML9EA24LypCgGclB9TJ6lSaFXuRE5gjWJb`, // Replace with a valid token
          },
        }
      );
  
      console.log('Document created successfully:', response.data);
      return response.data; // Use response further as needed
    } catch (error) {
      if (error.response) {
        // Sanity API response errors
        console.error('Sanity API Error:', error);
      } else {
        // Network or configuration errors
        console.error('Axios Network/Config Error:', error.message);
      }
    }
  };
  
*/
  return (
    <div className="registerContainer">
    <div className="registercomponent">
      <div className="registertitle">
  

     <div className="registerheading">   <h1 className="registerheading">
          Register   </h1>

          <div className="cancelicon" onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 36 36"><path fill="white" d="M21.533 18.002L33.768 5.768a2.5 2.5 0 0 0-3.535-3.535L17.998 14.467L5.764 2.233a2.5 2.5 0 0 0-3.535 0a2.5 2.5 0 0 0 0 3.535l12.234 12.234L2.201 30.265a2.498 2.498 0 0 0 1.768 4.267c.64 0 1.28-.244 1.768-.732l12.262-12.263l12.234 12.234a2.5 2.5 0 0 0 1.768.732a2.5 2.5 0 0 0 1.768-4.267z"/></svg>
          </div>
          </div>
          
        <p>(You cannot update the details after submitting the form.)</p>
          <p className="registercategory">
         <div className='registericon'>  {getCategoryIcon(category)}</div> 
         <div className="registername">
{category}
</div>
<div className="registermessage">
            {getCategoryMessage(category)}
            </div>
          </p>
      
      </div>

  {registration?(alert("You have already registered")):(
<div className="registerformparent">
      <form onSubmit={handleSubmit} className="registerform">
        {Array.from({ length: numberOfMembers }).map((_, index) => (
          <div key={index} className="mb-4">
            <h3 className="formh3">Member {index + 1}</h3>
            <div className='row'>
            <label> 
              <input 
              placeholder="Name"
                type="text" 
                
                onChange={(e) => handleInputChangeName(e, index)} 
                className="formname" 
                required 
              />
            </label>
            <br />

            <label>
            <div   className="formfield" >
            
             <input 
              placeholder="Programme"
                type="text" 
              
                onChange={(e) => handleInputChangeProgramme(e, index)} 
              className="formfieldbox"
                required 
              />
             
             </div>
            </label>
            
            <br />
            </div>
            <br/>
            <div className="formbelow">
                <div className="row">
            <label>
            <div className="formfield">
            
             
              <input 
                placeholder="Phone Number"
                type="text" 
               
                onChange={(e) => handleInputChangePhone(e, index)} 
                className="formfieldbox" 
                required 
              /> </div> 
            </label>
            <br />
           
            <label>

            <div className="formfield">
           
          
              <input 
               placeholder="Email ID "
                type="email" 
              
                onChange={(e) => handleInputChangeEmail(e, index)} 
                className="formfieldbox" 
                required 
              />
              </div> 
            </label>
            </div>
            <br />
           
            
          <div className="row">
            <label>
            <div className="formfield">
           
            <input 
            placeholder="Department "
                type="text" 
               
                onChange={(e) => handleInputChangeDepartment(e, index)} 
               className="formfieldbox"
                required 
              />
              </div> 
            </label>
            <br />

            
           
            <label>
            <div   className="formfield" >
            
             <input 
              placeholder="Year"
                type="text" 
              
                onChange={(e) => handleInputChangeYear(e, index)} 
              className="formfieldbox"
                required 
              />
              </div>
            </label>
            </div>
            </div>
            <br />
           
            
          </div>
          
        ))}
        
        <button type="submit" className="registerbtn">
          Register
        </button>
      </form>
      </div>
          )}
            
    </div>
    </div>
  );
};

export default Register;
