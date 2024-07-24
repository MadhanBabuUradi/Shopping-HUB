import { useSelector } from 'react-redux';
import LoginForm from '../../Forms/LoginForm/LoginForm'
import OrderSection from '../../Sections/OrdersSection/OrderSection'
import FeedbackForm from '../../Forms/FeedbackForm/FeedbackForm'
import Setting from '../../Sections/SettingSection/Setting'
import SideBar from '../../UI/SideBar/SideBar'
import AccountCard from '../../components/AccountCard/AccountCard'
import './AccountPage.css'
import { useState } from 'react'
import { motion } from 'framer-motion' 

const AccountPage = () => {

  const isAuth = useSelector((state) => state.isAuth.value);
  console.log(isAuth);  

  const [childData, setChildData] = useState('account');

  const handleChildData = (data) => {
    setChildData(data);
  };
  let content = <AccountCard/>

  if(childData === 'account'){
    content = <AccountCard/>
  }
  else if(childData === 'orders'){
    content = <OrderSection/>
  }
  else if(childData === 'settings'){
    content = <Setting/>
  }
  else if(childData === 'feedback'){
    content = <FeedbackForm/>
  }

  return (
    <>
    {!isAuth && <div className='account-page-form'>
        <LoginForm/>
    </div>}
    {isAuth && <div className='account-page'>
    <SideBar onDataUpdate={handleChildData} />
    <motion.div  animate={{x:["15rem","0rem"]}} transition={{
            duration: 0.5,
            ease: "easeInOut",
            loop: Infinity, 
            repeatDelay: 2, 
          }}>
      {content}
    </motion.div>
    </div>}
    </>
  )
}

export default AccountPage