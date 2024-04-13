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

  const [error, setError] = useState({
    usernameError: false,
    passwordError: false,
    confirmPasswordError: false,
    promoCodeError: false,
    emailError: false,
    smsCodeError: false,
    currencyError: false,
  });

  const handleUsernameChange = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  const handleCountryChange = (index) => {
    console.log(name + ", " + index);
    setCountry(index);
  };

  const handlePhoneNumberChange = (e) => {
    console.log(e.target.value);
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
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
      const dataToSend = { 
        area_code: `${countryCallingCode}`,
        mobile: `${phoneNumber}`,
      };
      const response = await axios.post("http://localhost:5000/api/public/sms/send", dataToSend);
      console.log("Registering user...",response);
    } catch (error) {
      console.log(error);
    }

    // Implement send OTP functionality here
    console.log(`Sending OTP to ${countryCallingCode}${phoneNumber}`);
  };

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
      isError = true;
    }
    if (!phoneNumber) {
      setError((prevState) => ({ ...prevState, phoneNumberError: true }));
      isError = true;
    }
    if (!password) {
      setError((prevState) => ({ ...prevState, passwordError: true }));
      isError = true;
    }
    if (!confirmPassword) {
      setError((prevState) => ({ ...prevState, confirmPasswordError: true }));
      isError = true;
    }
    if (!email) {
      setError((prevState) => ({ ...prevState, emailError: true }));
      isError = true;
    }
    if (!promoCode) {
      setError((prevState) => ({ ...prevState, promoCodeError: true }));
      isError = true;
    }
    if (!smsCode) {
      setError((prevState) => ({ ...prevState, smsCodeError: true }));
      isError = true;
    }
    if (!currency) {
      setError((prevState) => ({ ...prevState, currencyError: true }));
      isError = true;
    }

    // If any error found, return
    if (isError) {
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

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
      <form className="grid gap-4 bg-white px-10 rounded-none md:px-14 sm:p-0 py-8 md:rounded-2xl">
        <p className="text-2xl font-bold pb-2.5 pt-3">Join Us</p>
        {/* <Jass/> */}
        <Input color="black" label="Username" value={username} onChange={handleUsernameChange} error= {error.usernameError} />
        <div>
          {error.passwordError ? (
            <p className="text-sm text-red-400 mb-1">
              ! Please enter your correct password.
            </p>
          ) : null}
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
        <Input
          color="black"
          label="Confirm Password"
          icon={<IoIosInformationCircle />}
          onChange={handleConfirmPasswordChange}
          value={confirmPassword}
          error={error.confirmPasswordError}
        />
        <Input
          color="black"
          label="Promo Code"
          onChange={handlePromoCodeChange}
          value={promoCode}
          error={error.promoCodeError}
        />
        <Input 
          color="black" 
          label="Email" 
          onChange={handleEmailChange}  
          value={email} 
          error={error.emailError}
        />
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
            className="rounded-l-none !border-t-blue-gray-200 focus:!border-t-gray-900 outline-none"
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
        <Input
          color="black"
          label="SMS Verification Code"
          onChange={handleSmsCodeChange}
          value={smsCode}
          error={error.smsCodeError}
        />
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
        <div className="flex justify-center items-center pt-1">
          <Button variant="filled" onClick={handleRegister}>
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}
