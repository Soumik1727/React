import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Container,Row,Col, Table} from 'react-bootstrap';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
            // Handling input form only
            // Handling input form only
    let [formData, setFormData] = useState(
        {
            uname:'',
            uemail:'',
            uphone:'',
            uMessage:'',
            index:''
        }
    )
        let getValue=(event)=>{
                let oldData = {...formData}         // getting 5 data from the above object
                let inputName = event.target.name;  // getting the current input name
                let inputValue = event.target.value;    // getting the current input value
                oldData[inputName] = inputValue;       // changing only the required data
                setFormData(oldData);           // then update the changed data
        }
                    // Handling user data
                    // Handling user data
        let [userData, setUserData] = useState([]);   // initially the array is empty // this array will contain user data in a array form

        let handleSubmit = (event) =>{
            event.preventDefault();

            let currUserData = {
                uname: formData.uname,
                uemail: formData.uemail,
                uphone: formData.uphone,
                uMessage: formData.uMessage
            }
            if(formData.index === ""){        // checking if want to insert new data(if part) or want to update(else part)
                                // check if a user is already exist or not
                let checkFilterData = userData.filter((v)=>v.uemail==formData.uemail || v.uphone==formData.uphone);
                if(checkFilterData.length==1){
                    toast.error("Email or phone already exist...");
                    
                }
                else{
                    let oldUserData = [...userData, currUserData];  // Old user data are stored into array
                    console.log(oldUserData);
                    setUserData(oldUserData);
                    setFormData(        // After inserting the form should become empty
                        {
                            uname:'',
                            uemail:'',
                            uphone:'',
                            uMessage:'',
                            index:''
                        } 
                    )
                    toast.success("Submitted successfully...");
                }
            }
                    //  Actual updating logic after filling the data
                    //  Actual updating logic after filling the data
            else{       
                let editIndex = formData.index;

                                        // checking the email and phone number already exists or not except the data which will be updated. 
                let checkFilterData = userData.filter((v,i)=>(v.uemail==formData.uemail || v.uphone==formData.uphone) && i != editIndex);
                if(checkFilterData.length==1){
                    toast.error("Email or phone already exist...");  
                }
                else{
                    let oldData = userData;

                    oldData[editIndex]['uname'] = formData.uname;
                    oldData[editIndex]['uemail'] = formData.uemail;
                    oldData[editIndex]['uphone'] = formData.uphone;
                    oldData[editIndex]['uMessage'] = formData.uMessage;


                    setUserData(oldData);

                    setFormData(        // After inserting the form should become empty
                        {
                            uname:'',
                            uemail:'',
                            uphone:'',
                            uMessage:'',
                            index:''
                        } 
                    )
                    toast.success("Updated successfully...");
                }
            }
        }

                // Delete Row   // Logic: J index ta delete korbo.. seta bade baki row or data notun kore filter kore save korbo
                // Delete Row
                // Delete Row
                // Delete Row
    let deleteRow = (indexNumber)=>{

        let filterDataAfterDelete = userData.filter( (v,i)=> i !== indexNumber);
        setUserData(filterDataAfterDelete);
        toast.success("Deleted successfully...");
    }
                //  filling the form with existing data which will be updated
                //  filling the form with existing data which will be updated
                //  filling the form with existing data which will be updated
    let editRow=(indexNumber)=>{
        // alert(index);
        let editData = userData.filter( (v,i)=> i == indexNumber)[0];
        editData['index'] = indexNumber;    // As setFormData has five attributes and editData
                                            // doesn't contain index
        setFormData(editData);
    }

  return (
    
    
    <Container fluid>
        <ToastContainer />
        <Container>
            <Row>
                <Col clasName='text-center py-5'>
                    <h1>Enquire now</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={5}>
                    {/* {userData.length} */}
                  <form onSubmit={handleSubmit}>
                      <div className='pb-3'>     {/*  Text will start from left*/}
                          <label className='form-label'>Name</label>
                          <input onChange={getValue} type='text' name='uname' className="form-control" value={formData.uname}/>
                      </div>
                      <div className='pb-3'>    
                          <label className='form-label'>Email</label>
                          <input onChange={getValue} type='text' name='uemail' className="form-control" value={formData.uemail}/>
                      </div>
                      <div className='pb-3'>    
                          <label className='form-label'>Phone</label>
                          <input onChange={getValue} type='text' name='uphone' className="form-control" value={formData.uphone}/>
                      </div>
                      <div className='pb-3'></div>
                      <div class='mb-3'>    
                          <label for="" className='form-label'>Message</label>
                          <textarea onChange={getValue} name='uMessage' className='form-control' id='' rows='3' value={formData.uMessage}> </textarea>
                      </div>

                      <div className='pb-3'>
                        
                          <button className='btn btn-primary'>
                              {formData.index!==''?'Update':'Save'}
                          </button>
                      </div>
                  </form>
                </Col>
                                    {/* Display Data */}
                                    {/* Display Data */}
                                    {/* Display Data */}
                                    {/* Display Data */}
                <Col lg={7}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Message</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(userData.length >= 1) ?
                                
                                userData.map( (obj, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{obj.uname}</td>
                                            <td>{obj.uemail}</td>
                                            <td>{obj.uphone}</td>
                                            <td>{obj.uMessage}</td>
                                            <td>
                                                <button onClick={()=>editRow(index)}>Update</button>
                                                <button onClick={ ()=>deleteRow(index)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                <tr>
                                    <td colSpan={6}> No data found!</td>
                                </tr>
                            }
                            
                        </tbody>
                        

                    </Table>
                </Col>
            </Row>
        </Container>
    </Container>
  );
}

export default App;
