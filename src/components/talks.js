import React from 'react'


const TalkListItem = ({ item }) => (
  <li className="mb-6">
    <div>{item.location}</div>
    <div className="font-space text-grey text-xs uppercase">{item.city}</div>
  </li>
)

const Talks = ({ talkList }) => {
  const listLength = talkList.length
  const halfIndex = Math.floor(listLength / 2)
  const leftList = talkList.slice(0, halfIndex);
  const rightList = talkList.slice(halfIndex, listLength);
  return (
    <section className="contents">
      <div className="text-center md:text-left contents">
        <h3 className=" mb-10">Talks</h3>
        <ul className="md:mb-12 text-sm">
          {leftList.map(({ node }) => (
            <TalkListItem item={node} key={node.contentful_id} />
          ))}
        </ul>
        <ul className="mb-10 md:mb-12 text-sm">
          {rightList.map(({ node }) => (
            <TalkListItem item={node} key={node.contentful_id} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Talks;