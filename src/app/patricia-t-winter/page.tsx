import AuthorPage from "../components/Author";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function PatriciaTWinter(){
    return (
        <>
        <Header/>
        <AuthorPage 
  name="Patricia T. Winter "
  title="Reporter"
  email="patricia.winter@newsflashpro.com"
  bio="Hi, I’m Patricia. I cover all kinds of stories at NewsFlashPro — from local happenings to bigger national events. I enjoy figuring out the details that matter most and presenting them in a way that readers can actually understand and use."
  experience="I got started in journalism covering my local community. I spent a lot of time talking to people, attending events, and listening to different perspectives. Those early experiences taught me to pay attention to the small details, ask honest questions, and follow a story wherever it leads."
  personalLife="When I’m not writing, I love my morning coffee, going for a run, and listening to podcasts about ideas and innovation. Sometimes, the little things I notice while walking around town or chatting with neighbors inspire the next story I want to tell."
  initials="PW"
/>
        <Footer/>
        </>
    )
}