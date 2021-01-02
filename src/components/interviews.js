import React from 'react';
import Container from './container';

const InterviewListItem = ({ item }) => (<li><a href={item.linkHref}>{item.linkText}</a></li>);

const Interviews = ({ interviewWebList, interviewPodcastList }) => {
  return (
    <section className="mb-40">
      <Container isNarrow>
        <div className="flex">
          <h3 className="flex-1">Interviews</h3>
          <ul className="flex-1">
            <li className="font-space uppercase mb-3">Web</li>
            {interviewWebList.map((item) => (
              <InterviewListItem item={item} key={item.contentful_id} />
            ))}
          </ul>
          <ul className="flex-1">
            <li className="font-space uppercase mb-3">Podcasts</li>
            {interviewPodcastList.map((item) => (
              <InterviewListItem item={item} key={item.contentful_id} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Interviews;