import React,{useState} from 'react';
import Helmet from '../components/Helmet/Helmet';
import {Container, Row, Col, FormGroup, Form} from 'reactstrap';
import {Link, useNavigate} from 'react-router-dom';
import '../styles/login.css';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase.config';
import {toast} from 'react-toastify';

const Login =()=>{

const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [loading, setLoading]= useState(false)

const navigate = useNavigate();
const signIn = async (e)=>{
e.preventDefault();
setLoading(true);

try {
  
    const userCredential = await signInWithEmailAndPassword(auth, email, password)

    const user = userCredential.user;
    console.log("user Login: ", user);

    setLoading(false)

    toast.success('Successfully logged in')

    navigate('/checkout')
} catch (error) {
    setLoading(false);
    toast.error(error.message)
}
}
    return(
       <Helmet title='Login'>

            <section>
                <Container>
                    <Row>
                        {
                            loading? <Col className='text-center' lg='12'><h6 className='fw-bold'> Loading...</h6></Col> : <Col lg='6' className='m-auto text-center'>
                            <h3 className='fw-bold mb-4'>
                              Login  
                            </h3>

                            <Form className='auth__form' onSubmit={signIn}>
                                <FormGroup className='form__group'>
                                    <input type='email' value={email} onChange={e=> setEmail(e.target.value)} placeholder='Enter Email'/>
                                </FormGroup>

                                <FormGroup className='form__group'>
                                    <input type='password' value={password} onChange={e=> setPassword(e.target.value)} placeholder='Enter Password'/>
                                </FormGroup>
                                
                                <button type='submit' className="buy__btn auth__btn">Login</button>
                                <p>Don't have a account? <Link to='/signup'><span className='fw-bold'>Create an account</span></Link></p>
                            </Form>
                        </Col>
                        }
                    </Row>
                </Container>
            </section>

       </Helmet>
    )
}

export default Login;