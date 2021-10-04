import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const Login =()=>{

return(
    <div className="container" style={{height:"100vh"}}>
        <Box className="d-grid my-5">
        <TextField id="email" label="Email" variant="outlined" className="mx-auto "/>
        <TextField id="userName" label="User Name" variant="outlined" className="mx-auto my-3"/>
        <TextField id="otp" label="OTP" variant="outlined" className="mx-auto my-3"/>
        <Button variant="outlined" className="m-auto" >Get OTP</Button>
        </Box>
    </div>
)
}

export default Login;