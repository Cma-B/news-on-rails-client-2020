import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const ArticleContent = (props) => {
  return (
    <>
      <Card>
        <Image src="/images/wireframe/white-image.png" />
        <Card.Content>
          <div id={`article-${props.article.id}`} data-id={props.article.id}>
            <Card.Header as="h1" id="title">{props.article.title}</Card.Header>
            <Card.Description as="h2" id="lead">{props.article.lead}</Card.Description>
            {props.singleArticle ? (
              <>
                <Card.Content extra>
                  <p id="content">{props.article.content}</p>
                  <button id="button" onClick={props.closeSingleArticle}>Close article</button>
                </Card.Content>
              </>
            ) : (
                <button id="button" onClick={props.getSingleArticle}>Read more</button>
              )}
          </div>
        </Card.Content>
      </Card>
    </>
  )
}

export default ArticleContent