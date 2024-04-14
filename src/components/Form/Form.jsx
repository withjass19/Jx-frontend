import { React, useState } from "react";
import { IoIosInformationCircle } from "react-icons/io";
import {
  Input,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Select,
  Option,
} from "@material-tailwind/react";
import { useCountries } from "use-react-countries";
import axios from "axios";
// import Jass from './inputs/Jass';

export default function Form() {
  const { countries } = useCountries();
  const [country, setCountry] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [smsCode, setSmsCode] = useState("");
  const [currency, setCurrency] = useState("");
  const [username, setUsername] = useState("");
  const { name, flags, countryCallingCode } = countries[country];
  const [disabled, setDisabled] = useState(true);

  const [error, setError] = useState({
    usernameError: false,
    passwordError: false,
    confirmPasswordError: false,
    promoCodeError: false,
    emailError: false,
    smsCodeError: false,
    currencyError: false,
  });

  const [Msgerror, setMsgError] = useState({
    usernameErrorMessage: "",
    passwordErrorMessage: "",
    confirmPasswordErrorMessage: "",
    promoCodeErrorMessage: "",
    emailErrorMessage: "",
    smsCodeErrorMessage: "",
    currencyErrorMessage: "",
  });

  const handleUsernameChange = (e) => {
    const usernameInput = e.target.value;
    setUsername(usernameInput);

    // Regular expression for validating username
    const usernameRegex = /^[a-zA-Z0-9_-]{4,32}$/;

    // Test if the username matches the regex pattern
    if (!usernameRegex.test(usernameInput)) {
        setError((prevState) => ({
            ...prevState,
            usernameError: true,
        }));
        setMsgError((prevState) => ({
            ...prevState,
            usernameErrorMessage: "Username must be 4-32 characters and can only use letters, numbers, '_', or '–'.",
        }));
    } else {
        setError((prevState) => ({
            ...prevState,
            usernameError: false,
        }));
        setMsgError((prevState) => ({
            ...prevState,
            usernameErrorMessage: "",
        }));
    }
  };

  const handleCountryChange = (index) => {
    console.log(name + ", " + index);
    setCountry(index);
  };

  const handlePhoneNumberChange = (e) => {
    const phoneNumberInput = e.target.value;
    setPhoneNumber(phoneNumberInput);

    // Regular expression for validating phone numbers
    const indiaRegex = /^[0-9]{10}$/;
    const otherRegex = /^[0-9]{7}$|^[0-9]{12}$/;

    // Test if the phone number matches the regex pattern for India or other countries
    if (countryCallingCode === '+91' && !indiaRegex.test(phoneNumberInput)) {
        setError((prevState) => ({
            ...prevState,
            phoneNumberError: true,
        }));
        setMsgError((prevState) => ({
            ...prevState,
            phoneNumberErrorMessage: "For India: 6-9 numbers starting with a total of 10 numeric characters.",
        }));
    } else if (countryCallingCode !== '+91' && !otherRegex.test(phoneNumberInput)) {
        setError((prevState) => ({
            ...prevState,
            phoneNumberError: true,
        }));
        setMsgError((prevState) => ({
            ...prevState,
            phoneNumberErrorMessage: "For other countries: 0-9 numbers starting with a total of 7 or 12 numeric characters.",
        }));
    } else {
        setError((prevState) => ({
            ...prevState,
            phoneNumberError: false,
        }));
        setMsgError((prevState) => ({
            ...prevState,
            phoneNumberErrorMessage: "",
        }));
    }
  };

  const handlePasswordChange = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);

    // Regular expression for validating password
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,32}$/;

    // Test if the password matches the regex pattern
    if (!passwordRegex.test(passwordInput)) {
        setError((prevState) => ({
            ...prevState,
            passwordError: true,
        }));
        setMsgError((prevState) => ({
            ...prevState,
            passwordErrorMessage: "Password must be between 6-32 characters and include at least one letter and one number.",
        }));
    } else {
        setError((prevState) => ({
            ...prevState,
            passwordError: false,
        }));
        setMsgError((prevState) => ({
            ...prevState,
            passwordErrorMessage: "",
        }));
    }
  };

  const handleConfirmPasswordChange = (e) => {
    console.log(e.target.value);
    setConfirmPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
    console.log(e.target.value);
  };

  const handleSmsCodeChange = (e) => {
    setSmsCode(e.target.value);
    console.log(e.target.value);
  };

  const handleCurrencyChange = (value) => {
    console.log(value);
    setCurrency(value);
  };

  const handleSendOTP = async() => {
    try {
      setMsgError((prevState) => ({ ...prevState, smsCodeErrorMessage: "" }))
      const dataToSend = { 
        area_code: `${countryCallingCode}`,
        mobile: `${phoneNumber}`,
      };
      const response = await axios.post("http://localhost:5000/api/public/sms/send", dataToSend);
      console.log("Registering user...",response);
      setDisabled(false);
    } catch (error) {
      console.log(error);
    }

    // Implement send OTP functionality here
    console.log(`Sending OTP to ${countryCallingCode}${phoneNumber}`);
  };

  const ValidateData = () => {
    let isError = false;

    // if (username.length < 3) {
    //   // alert('Username must be at least 4 characters long');
    //   // setError((prevState) => ({ ...prevState, usernameError: true }));
    //   isError = true;
    //   setMsgError((prevState) => ({ ...prevState, usernameErrorMessage: "Username must be at least 4 characters long" }))
    // }
    if (!phoneNumber) {
      setError((prevState) => ({ ...prevState, phoneNumberError: true }));
      setMsgError((prevState) => ({
        ...prevState,
        phoneNumberErrorMessage: "Please enter phone number",
      }));
      isError = true;
      // setMsgError()
    }
    // if (!password) {
    //   setError((prevState) => ({ ...prevState, passwordError: true }));
    //   isError = true;
    // }
    if (!confirmPassword) {
        setError((prevState) => ({
            ...prevState,
            confirmPasswordError: true,
        }));
        setMsgError((prevState) => ({
            ...prevState,
            confirmPasswordErrorMessage: "Please confirm your password.",
        }));
        isError = true;
    } else if (password !== confirmPassword) {
        setError((prevState) => ({
            ...prevState,
            confirmPasswordError: true,
        }));
        setMsgError((prevState) => ({
            ...prevState,
            confirmPasswordErrorMessage: "Passwords do not match.",
        }));
        isError = true;
    }

    if (!email) {
      setError((prevState) => ({ ...prevState, emailError: true }));
      isError = true;
    }
    // if (!promoCode) {
    //   setError((prevState) => ({ ...prevState, promoCodeError: true }));
    //   isError = true;
    // }
    if (!smsCode) {
      setError((prevState) => ({ ...prevState, smsCodeError: true }));
      isError = true;
    }
    if (!currency) {
      setError((prevState) => ({ ...prevState, currencyError: true }));
      isError = true;
    }
  }

  const handleRegister =  async() => {
    let isError = false;

    // Reset errors
    setError({
      usernameError: false,
      passwordError: false,
      confirmPasswordError: false,
      promoCodeError: false,
      emailError: false,
      smsCodeError: false,
      currencyError: false,
    });

    // Validate each input field
    if (!username) {
      setError((prevState) => ({ ...prevState, usernameError: true }));
      setMsgError((prevState) => ({ ...prevState, usernameErrorMessage: "Please enter username." }))
      isError = true;
    }
    if (!phoneNumber) {
      setError((prevState) => ({ ...prevState, phoneNumberError: true }));
      setMsgError((prevState) => ({ ...prevState, phoneNumberError: "Please enter phone number." }))
      isError = true;
    }
    if (!password) {
      setError((prevState) => ({ ...prevState, passwordError: true }));
      setMsgError((prevState) => ({ ...prevState, passwordErrorMessage: "Please enter password." }))
      isError = true;
    }
    // if (!confirmPassword) {
    //   setError((prevState) => ({ ...prevState, confirmPasswordError: true }));
    //   isError = true;
    // }
    if (!email) {
      setError((prevState) => ({ ...prevState, emailError: true }));
      isError = true;
    }
    // if (!promoCode) {
    //   setError((prevState) => ({ ...prevState, promoCodeError: true }));
    //   setMsgError((prevState) => ({ ...prevState, promoCodeErrorMessage: "Please enter refferal." }))
    //   isError = true;
    // }
    // if (!smsCode) {
    //   // smsCodeErrorMessage
    //   if(disabled === false){
    //     setError((prevState) => ({ ...prevState, smsCodeError: true }));
    //     setMsgError((prevState) => ({ ...prevState, smsCodeErrorMessage: "Please enter refferal." }))
    //     isError = true;
    //   }else{
    //     setError((prevState) => ({ ...prevState, smsCodeError: true }));
    //     setMsgError((prevState) => ({ ...prevState, smsCodeErrorMessage: "Please click send otp." }))
    //     isError = true;
    //   }
    // }
    if (!currency) {
      setError((prevState) => ({ ...prevState, currencyError: true }));
      setMsgError((prevState) => ({ ...prevState, currencyErrorMessage: "Please choose your currency." }))
      isError = true;
    }

    ValidateData();

    // If any error found, return
    if (isError) {
      return;
    }

    // if (password !== confirmPassword) {
    //   alert("Passwords do not match.");
    //   return;
    // }

    try {
      const dataToSend = { 
        region: `${name}`,
        name: `${username}`,
        password: `${password}`,
        mobile: `${phoneNumber}`,
        smsCode: `${smsCode}`,
        referral: `${promoCode}`,
        currencyCode: `${currency}`,
      };
      const response = await axios.post("http://localhost:5000/frontend/api/register/landing", dataToSend);
      console.log("Registering user...",response);
    } catch (error) {
      console.log(error);
    }

    // Implement registration logic here
    // console.log("Registering user...");
  };
  return (
    <div className="px-0 lg:px-14 sm:p-0">
      <form className="grid gap-2 bg-white px-10 rounded-none md:px-14 sm:p-0 py-8 md:py-8 md:rounded-2xl">
        <p className="text-2xl font-bold">Join Us</p>
        {/* <Jass/> */}
        <div>
          {/* <p className="text-xs text-red-500">{error.usernameError}</p> */}
          <p className="text-xs text-red-500 py-1.5">{Msgerror.usernameErrorMessage}</p>
          <Input color="black" label="Username" value={username} onChange={handleUsernameChange} error= {error.usernameError} />
        </div>
        <div>
          {/* {error.passwordError ? (
            <p className="text-xs text-red-400 mb-1">
              ! Please enter your correct password.
            </p>
          ) : null} */}
          <p className="text-xs text-red-500 py-1.5">{Msgerror.passwordErrorMessage}</p>
          <Input
            color="black"
            label="Password"
            icon={<IoIosInformationCircle />}
            onChange={handlePasswordChange}
            value={password}
            error={error.passwordError}
            // errorMessage="Password is required"
          />
          <p className="text-gray-500 text-sm mt-2 flex">
            <IoIosInformationCircle />
            Use at least 8 characters, one uppercase, one lowercase and one
            number.
          </p>
        </div>
        <div>
          <p className="text-xs text-red-500 py-1.5">{Msgerror.confirmPasswordErrorMessage}</p>
          <Input
            color="black"
            label="Confirm Password"
            icon={<IoIosInformationCircle />}
            onChange={handleConfirmPasswordChange}
            value={confirmPassword}
            error={error.confirmPasswordError}
          />
        </div>
        <div>
          <p className="text-xs text-red-500 py-1.5">{Msgerror.promoCodeErrorMessage}</p>
          <Input
            color="black"
            label="Promo Code"
            onChange={handlePromoCodeChange}
            value={promoCode}
            error={error.promoCodeError}
          />
        </div>

        <div>
          <div className="flex flex-col gap-2">
            <div>
              <p className="text-xs text-red-500 py-1.5">{Msgerror.confirmPasswordErrorMessage}</p>
              <Input 
                color="black" 
                label="Email" 
                onChange={handleEmailChange}  
                value={email} 
                error={error.emailError}
              />
            </div>
            <p className="text-xs text-red-500 py-1.5">{Msgerror.phoneNumberErrorMessage}</p>
          </div>
          <div className="relative flex w-full">
            <Menu placement="bottom-start">
              <MenuHandler>
                <Button
                  ripple={false}
                  variant="text"
                  color="blue-gray"
                  className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                >
                  <img
                    src={flags.svg}
                    alt={name}
                    className="h-4 w-4 rounded-full object-cover"
                  />
                  {countryCallingCode}
                </Button>
              </MenuHandler>
              <MenuList className="max-h-[20rem] max-w-[18rem]">
                {countries.map(({ name, flags, countryCallingCode }, index) => (
                  <MenuItem
                    key={name}
                    value={name}
                    className="flex items-center gap-2"
                    onClick={() => handleCountryChange(index)}
                  >
                    <img
                      src={flags.svg}
                      alt={name}
                      className="h-5 w-5 rounded-full object-cover"
                    />
                    {name} <span className="ml-auto">{countryCallingCode}</span>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Input
              type="tel"
              placeholder="Mobile Number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              error={error.phoneNumberError}
              className={error.phoneNumberError? ("rounded-l-none !border-t-red-500 focus:!border-t-red-500 outline-none") : ("rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900 outline-none")}
              // className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900 outline-none"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button
              size="sm"
              color={phoneNumber ? "gray" : "blue-gray"}
              disabled={!phoneNumber}
              className="!absolute right-1 top-1 rounded"
              onClick={handleSendOTP}
            >
              Send OTP
            </Button>
          </div>
        </div>
        
        <div className="mt-3">
        {/* <p className="text-xs text-red-500 py-1.5">{Msgerror.smsCodeErrorMessage}</p> */}
          <Input
            color="black"
            label="SMS Verification Code"
            onChange={handleSmsCodeChange}
            value={smsCode}
            error={error.smsCodeError}
            disabled={disabled}
          />
        </div>
        

        <div>
        <p className="text-xs text-red-500 py-1.5">{Msgerror.currencyErrorMessage}</p>
          <Select
            label="Currency"
            onChange={handleCurrencyChange}
            value={currency}
            error={error.currencyError}
          >
            <Option value="INR">INR</Option>
            <Option value="EUR">EUR</Option>
            <Option value="USD">USD</Option>
            <Option value="USDT">USDT</Option>
          </Select>
        </div>
        
        <div className="flex justify-center items-center pt-1">
          <Button variant="filled" onClick={handleRegister}>
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}
