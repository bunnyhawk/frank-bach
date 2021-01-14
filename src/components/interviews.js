import React from 'react';


const InterviewListItem = ({ item }) => (<li><a href={item.linkHref} className="text-xs">{item.linkText}</a></li>);

const Interviews = ({ interviewWebList, interviewPodcastList, isHome }) => {
  return (
    <section className="mb-10 md:mb-40 contents">
      <div className="text-center md:text-left contents">
        <h3 className="mb-10">Interviews</h3>
        <ul className="mb-7">
          <li className="font-space uppercase mb-3 text-sm">Web</li>
          {interviewWebList.map((item) => (
            <InterviewListItem item={item} key={item.contentful_id} />
          ))}
        </ul>
        <ul>
          <li className="font-space uppercase mb-3 text-sm">Podcasts</li>
          {interviewPodcastList.map((item) => (
            <InterviewListItem item={item} key={item.contentful_id} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Interviews;