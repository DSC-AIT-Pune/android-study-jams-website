import { React, useState } from "react";
import "../styles/css/timeline.css";
import pin from "../styles/images/pin.svg"

export const Timeline = () => {
  const [schedule, setSchedule] = useState([
    { title: "Introductory Session", content: "Know All about Android Study Jams 2021", date: "1s t Dec" },
    { title: "Kotlin Basics & OOPs", content: "Learn all the Kotlin basics of programming and introduction to Object Oriented Programming concepts", date: " 3rd Dec" },
    { title: "Higher Order Function", content: "Learn to use higher order functions in Kotlin", date: "4th Dec" },
    { title: "XML , UI (Basics) & OOPs", content: "Learn how to design the UI of an Android Application", date: "11th Dec" },
    { title: "Chat Applcation UI", content: "Learn to build the UI of a chat application", date: "12th Dec" },
    { title: "Firevase & Authentication", content: "Learn to use the firebase database and authentication in it", date: "18th Dec" },
    { title: "Backend, API", content: "Learn to integrate API in Android Application", date: "19th Dec" },
    { title: "ListView & RecycleView", content: "Learn to display the content in the app from storage", date: "25th Dec" },
    { title: "Chat Application Finslisation", content: "Final working chat application finalisation", date: "26th Dec" },
    { title: "Hackathon Announcement ", content: "A hackathon to test your skills about what you have learnt in Android Study Jams 2021", date: "29th Dec" },
  ]);
  

  return (
    <div>
      
       
      

      <section id="cd-timeline" class="cd-container">
        {schedule.map((schedule) => {
          return (
            <div class="cd-timeline-block">
              <div class="cd-timeline-img cd-picture">
                <img
                  src={pin}
                  alt="Picture"
                />
              </div>

              <div class="cd-timeline-content">
                <h2>{schedule.title}</h2>
                <p>{schedule.content}</p>
                {/* <a href="#0" class="cd-read-more">Read more</a> */}
                <span class="cd-date">{schedule.date}</span>
              </div>
            </div>
          );
        })}

        {/* <div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-movie.svg" alt="Movie"/>
			</div>  

			<div class="cd-timeline-content">
				<h2>Title of section 2</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde?</p>
				<a href="#0" class="cd-read-more">Read more</a>
				<span class="cd-date">Jan 18</span>
			</div> 
		</div>  */}

        {/* <div class="cd-timeline-block">
			<div class="cd-timeline-img cd-picture">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg" alt="Picture">
			</div> <!-- cd-timeline-img -->

			<div class="cd-timeline-content">
				<h2>Title of section 3</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, obcaecati, quisquam id molestias eaque asperiores voluptatibus cupiditate error assumenda delectus odit similique earum voluptatem doloremque dolorem ipsam quae rerum quis. Odit, itaque, deserunt corporis vero ipsum nisi eius odio natus ullam provident pariatur temporibus quia eos repellat consequuntur perferendis enim amet quae quasi repudiandae sed quod veniam dolore possimus rem voluptatum eveniet eligendi quis fugiat aliquam sunt similique aut adipisci.</p>
				<a href="#0" class="cd-read-more">Read more</a>
				<span class="cd-date">Jan 24</span>
			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Location">
			</div> <!-- cd-timeline-img -->

			<div class="cd-timeline-content">
				<h2>Title of section 4</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
				<a href="#0" class="cd-read-more">Read more</a>
				<span class="cd-date">Feb 14</span>
			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-location">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.svg" alt="Location">
			</div> <!-- cd-timeline-img -->

			<div class="cd-timeline-content">
				<h2>Title of section 5</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
				<a href="#0" class="cd-read-more">Read more</a>
				<span class="cd-date">Feb 18</span>
			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-movie">
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-movie.svg" alt="Movie">
			</div> <!-- cd-timeline-img -->

			<div class="cd-timeline-content">
				<h2>Final Section</h2>
				<p>This is the content of the last section</p>
				<span class="cd-date">Feb 26</span>
			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block --> */}
      </section>
    </div>
  );
};
export default Timeline;
