import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import khanac from "./media/khanac.jpeg";
import snow from "./media/snow.jpeg";
import phillyd from "./media/phillyd.jpeg";
import elkhanmigo from "../../common/media/images/elkhanmigo.jpg";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../database/firebaseResources";
export const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Button
        variant="light"
        onClick={() => {
          logEvent(analytics, "select_content", {
            content_type: "button",
            item_id: "About",
          });
          setIsModalOpen(true);
        }}
      >
        About
      </Button>
      <br />
      <br />

      <Modal centered show={isModalOpen} fullscreen>
        <Modal.Header
          closeButton
          style={{ backgroundColor: "black", color: "white" }}
        >
          <Modal.Title>About</Modal.Title>
        </Modal.Header>
        <Modal.Body
          onHide={() => setIsModalOpen(false)}
          style={{ backgroundColor: "black", color: "white", display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <h1 style={{maxWidth: '100%',width: 700}}>Robots<br/> Building <br/>Education</h1>
          <p style={{maxWidth: '100%', width: 700}}>
            Robots Building Education is a system that converts your learning into scholarships. 
            Its goal is to inspire people to pursue the most competitive education they can to complete their goals.
            In most cases, that's a college degree. Do you feel like the school system left you behind? 
            <br/><br/>
            If so, RO.B.E made for you. 
          </p>
          <p style={{maxWidth: '100%', width: 700}}>
            This program focuses on and develops a powerful first hour of learning and supplements it generational knowledge. It's meant to
            embolden and encourage your ambitions by showing you how quickly you can accomplish a challenging goal or barrier with the right help.
          </p>

          <p style={{maxWidth: '100%', width: 700}}>
            If you want to learn more, please visit &amp; explore the Patreon
          </p>

          <div style={{ width:'700px', maxWidth:'100%'}}>
          <a
            onClick={() =>
              logEvent(analytics, "select_promotion", {
                creative_name: `https://www.patreon.com/RobotsBuildingEducation`,
                creative_slot: `About Slot`,
                promotion_id: `Robots Building Education`,
                promotion_name: "advertising_launch",
              })
            }
            href="https://www.patreon.com/RobotsBuildingEducation"
            target={"_blank"}
            style={{

              border: "1px solid white",
              padding: 24,
              backgroundColor:'#141518',

              color: "white",
              borderRadius: "6px",
            }}
          >
 
          <img
            style={{ borderRadius: "6px" }}
            width="48px"
            src="https://pbs.twimg.com/profile_images/1266950784609992705/xEe7mBx9_400x400.png"
          />
          RO.B.E
          </a>
          </div>
          <br/>
          <br/>

          <h2>Testimonials</h2>
          <p style={{maxWidth: '100%', width: 700}}>
            I have not collected testimonials. I'm sure the right ones will come
            in due time. Here are some relationships I'm proud to have created
            organically through media. Khan Academy was what inspired me many
            years ago, so I'm happy to be a rival AI company to "Khanmigo" today 😊🔪
            <br />
            <br />
            <div style={{display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
            <img width={350} src={elkhanmigo} />
                        <br />
            <img width={350} src={khanac} />
            <br />

            <img width={350} src={snow} />

            <br />
            <img width={350} src={phillyd} />
            </div>
            &nbsp;&nbsp;
          </p>
          <h2>Engineer</h2>
          <i>theme: code</i>
          <p style={{maxWidth: '100%', width: 700}}>
            Version 3 of the 16 lesson crash course is under development.
            Other than the crash course, you're granted a place to gain experience with me and a place 
            to explore further with computer science so that you consider a pathway to college.
          </p>
          <br/>

          <h2>Creator</h2>
          <i>theme: communication</i>
          <p style={{maxWidth: '100%', width: 700}}>
            Creating content is like creating code, except you're more concerned with people than machines.
            Creator is a collection of content I'm writing centered around the power of communication and well-rounded &amp; cultural knowledge. My background
            in computer science specializes in human-computer interaction, which you may recognize as UI/UX.
          </p>
                    <br/>

          <h2>Dealer</h2>
          <i>theme: business</i>
          <p style={{maxWidth: '100%', width: 700}}>
            Before investing in things, I recommend understanding what it means to be a good business. Focus investing is the style of investing I recommend, which translates
            to being well-read, well-informed and modestly hungry for more knowledge. You'll know a good deal when you really understand the value of a dollar, and by that I mean you'll know a great deal of information about the world that operates around you.
          </p>
                    <br/>

          <h2>RO.₿.E</h2>
          <i>theme: education</i>
          <p style={{maxWidth: '100%', width: 700}}>
            This is a network of robots that create and share education. Ultimately, it's a place to serve educators of any kind and teachers.
          </p>
                    <br/>


          <h2>Boss Mode</h2>
          <i>theme: credentialing</i>
          <p style={{maxWidth: '100%', width: 700}}>
            This will be a curated and challenging game experience where students will be assisted with AI. Yes, that's right. The student is given AI and wished good luck!
          </p>
                    <br/>

          <br />
          <br />
          <br /> <br />
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "black", color: "white" }}>
          <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
            Exit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
