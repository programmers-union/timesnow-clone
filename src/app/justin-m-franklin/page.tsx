import AuthorPage from "../components/Author";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function JustinMFranklin(){
    return (
        <>
        <Header/>
                <AuthorPage
  name="Justin M. Franklin"
  title=" Reporter"
  email="justin.franklin@newsflashpro.com"
  bio="Hi, I’m Justin. At NewsFlashPro, I write about all kinds of stories. I enjoy following leads, asking questions, and figuring out the details that make a story matter. Whether it’s a local event or something happening on a bigger stage, I like helping readers see the full picture."
  experience="I got my start reporting in my own community. I spent time talking with people, attending events, and paying attention to small details that often get overlooked. Those experiences taught me that every story has layers, and it’s my job to uncover them in a way readers can connect with."
  personalLife="Outside of work, I like taking photos of everyday life, playing chess, and tinkering with new software just to see what it can do. Often, the little things I notice while walking around town or observing online spark ideas for stories I want to tell."
  initials="JF"
/>
        <Footer/>
        </>
    )
}