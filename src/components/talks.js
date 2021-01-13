import React from 'react';
import Container from './container';

const TalkListItem = ({ item }) => (<li><a href={item.linkHref} className="text-xs">{item.linkText}</a></li>);

const Talks = ({ talkList }) => {
  return (
    <section className="mb-10 md:mb-40">
      <Container isNarrow>
        <div className="flex flex-col md:flex-row text-center md:text-left">
          <h3 className="flex-1 mb-10">Talks</h3>
          <ul className="flex-1 mb-7">
            <li className="font-space uppercase mb-3 text-sm">Web</li>
            {talkList.map((item) => (
              <TalkListItem item={item} key={item.contentful_id} />
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Talks;