export async function navQuery(){
    const siteNavQueryRes = await fetch(import.meta.env.WORDPRESS_API_URL, {
        method: 'post', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            query: `{
                menus(where: {location: PRIMARY}) {
                  nodes {
                    name
                    menuItems {
                        nodes {
                            uri
                            url
                            order
                            label
                        }
                    }
                  }
                }
                generalSettings {
                    title
                    url
                    description
                }
            }
            `
        })
    });
    const{ data } = await siteNavQueryRes.json();
    return data;
}

export async function getNodeByURI(uri){
    const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
        method: 'post', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            query: `query GetNodeByURI($uri: String!) {
                  nodeByUri(uri: $uri) {
                  __typename
                  isContentNode
                  isTermNode
                  ... on Post {
                    id
                    title
                    date
                    uri
                    excerpt
                    content
                    categories {
                      nodes {
                        name
                        uri
                      }
                    }
                    featuredImage {
                      node {
                        srcSet
                        sourceUrl
                        altText
                        mediaDetails {
                          height
                          width
                        }
                      }
                    }
                  }
                  ... on Page {
                    id
                    title
                    uri
                    date
                    content
                  }
                  ... on Category {
                    id
                    name
                    posts {
                      nodes {
                        date
                        title
                        excerpt
                        uri
                        categories {
                          nodes {
                            name
                            uri
                          }
                        }
                        featuredImage {
                          node {
                            srcSet
                            sourceUrl
                            altText
                            mediaDetails {
                              height
                              width
                            }
                          }
                        }
                      }
                    }
                  }
                  ... on Customer {
                    id
                    title
                    uri
                    date
                    customersFields {
                      customerIndustry
                      customerStoryDetails
                      subHeading
                      customerLogo {
                        node {
                          link
                        }
                      }
                    }
                  }
                }
              }
            `,
            variables: {
                uri: uri
            }
        })
    });
    const{ data } = await response.json();
    return data;
}

export async function getAllUris(){
  const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
      method: 'post', 
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
          query: `query GetAllUris {
            terms {
              nodes {
                uri
              }
            }
            posts(first: 100) {
              nodes {
                uri
              }
            }
            pages(first: 100) {
              nodes {
                uri
              }
            }
            customers(first: 100) {
              nodes {
                uri
              }
            }
          }
          `
      })
  });
  const{ data } = await response.json();
  const uris = Object.values(data)
    .reduce(function(acc, currentValue){
      return acc.concat(currentValue.nodes)
    }, [])
    .filter(node => node.uri !== null)
    .map(node => {
      let trimmedURI = node.uri.substring(1);
      trimmedURI = trimmedURI.substring(0, trimmedURI.length - 1)
      return {params: {
        uri: trimmedURI
      }}
    })

  return uris;

}

export async function postsQuery(){
    const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
        method: 'post', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            query: `{
                posts {
                  nodes {
                    date
                    uri
                    title
                    commentCount
                    excerpt
                    categories {
                      nodes {
                        name
                        uri
                      }
                    }
                    author {
                      node {
                        uri
                        name
                      }
                    }
                    featuredImage {
                      node {
                        srcSet
                        sourceUrl
                        altText
                        mediaDetails {
                          height
                          width
                        }
                      }
                    }
                  }
                }
              }
            `
        })
    });
    const{ data } = await response.json();
    return data;
}

export async function customersQuery(){
    const response = await fetch(import.meta.env.WORDPRESS_API_URL, {
        method: 'post', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            query: `{
                customers {
                  nodes {
                    date
                    title
                    uri
                    customersFields {
                      customerIndustry
                      aboutDetails
                      customerChallenge
                      customerName
                      customerSolution
                      numberOfEmployees
                      customerStoryDetails
                      customerStorySubHeading
                      customerStoryImage {
                        node {
                          mediaItemUrl
                        }
                      }
                    }
                  }
                }
              }
            `
        })
    });
    const{ data } = await response.json();
    return data;
}