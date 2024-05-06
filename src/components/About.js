import React from 'react';

const About = () => {
  // Define information about the church
  const churchInfo = {
    name: "Community Church",
    mission: "To spread love and compassion through service and worship.",
    vision: "To create a welcoming community where all can grow in faith and serve others.",
    history: "Community Church was founded in 1972 by a group of dedicated individuals who felt a calling to create a place where people could come together to worship, learn, and serve. Over the years, the church has grown from a small gathering to a thriving community of believers.",
    beliefs: [
      "We believe in the triune God: Father, Son, and Holy Spirit.",
      "We believe in the authority of the Bible as the inspired Word of God.",
      "We believe in the divinity of Jesus Christ, his death, and resurrection for the salvation of humanity.",
      "We believe in the power of prayer and the importance of cultivating a personal relationship with God.",
      "We believe in the value of community and serving others.",
      "We believe in the importance of spiritual growth and lifelong learning."
    ],
    activities: [
      "Sunday Worship Services: We gather every Sunday morning for a time of worship, prayer, and teaching from the Bible.",
      "Small Groups: Throughout the week, we offer small groups for people to connect, study the Bible, and support one another.",
      "Community Outreach: We are actively involved in serving our local community through various outreach programs, including food drives, homeless ministries, and youth mentoring programs.",
      "Missions: We support missions both locally and globally, partnering with organizations to spread the love of Christ and meet the needs of people around the world.",
      "Youth and Children's Ministry: We provide opportunities for children and youth to learn and grow in their faith through age-appropriate programs, activities, and events.",
      "Adult Education: We offer classes and seminars to help adults deepen their understanding of the Bible and grow in their relationship with God."
    ],
    additionalInfo: "Community Church is a place where everyone is welcome, regardless of background or beliefs. Whether you're exploring faith for the first time or have been a follower of Jesus for years, there's a place for you here. We invite you to join us as we journey together in faith, hope, and love."
  };

  return (
    <div className='main-page'>
      <h2>About {churchInfo.name}</h2>
      <p><strong>Mission:</strong> {churchInfo.mission}</p>
      <p><strong>Vision:</strong> {churchInfo.vision}</p>
      <h3>History</h3>
      <p>{churchInfo.history}</p>
      <h3>Beliefs</h3>
      <ul>
        {churchInfo.beliefs.map((belief, index) => (
          <li key={index}>{belief}</li>
        ))}
      </ul>
      <h3>Activities</h3>
      <ul>
        {churchInfo.activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
      <p>{churchInfo.additionalInfo}</p>
    </div>
  );
};

export default About;
