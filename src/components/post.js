import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { toKebabCase } from '../helpers'

const Post = ({
  title,
  date,
  path,
  author,
  excerpt,
  tags,
  html,
  children,
}) => (
  <PostContontainer className="mt-1 mb-5">
    <Title>
      {excerpt ? <Link to={path}># {title}</Link> : title}
    </Title>

    <Meta>
      {date} {author && <>— Written by {author}</>}
      {tags ? (
        <Tags>
          {tags.map(tag => (
            <Link to={`/tag/${toKebabCase(tag)}/`} key={toKebabCase(tag)}>
              <Tag>#{tag}</Tag>
            </Link>
          ))}
        </Tags>
      ) : null}
    </Meta>

    <>{children || null}</>
    <>{html ? (<div dangerouslySetInnerHTML={{ __html: html }} />) : null}</>
  </PostContontainer>
)

Post.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  path: PropTypes.string,
  author: PropTypes.string,
  excerpt: PropTypes.string,
  html: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
}

export default Post

const PostContontainer = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: left;
  padding: 20px;
  margin: 0 auto 20px;
  position: relative;

  @media (max-width: 900px) {
    max-width: 660px;
  }

  img {
    border-radius: 8px;
  }

  a {
    color: #BCA1F7;
  }

  em {
    color: var(--dark-color-secondary);
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 10px 0px 0px;
  }
`

const Title = styled.h1`
  margin: 0px;
  a {text-decoration: none;}
`

const Meta = styled.div`
  color: var(--dark-color-secondary);
  font-size: 1rem;
  margin-bottom: 30px;
`

const Tags = styled.div`
  margin-top: 10px;
`

const Tag = styled.span`
  display: inline-block;
  margin: 10px 10px 0 0;
  background-color: #fe5186;
  border-radius: 5px;
  padding: 2px 4px;
  color: #ffffff;
`
