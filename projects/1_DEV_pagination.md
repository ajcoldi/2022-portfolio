---
title: "Nodejs Pagination/sorting"
author: "Alex Coldicott"
description: "An API for sorting, filtering, searching and pagination with mock data"
category: "Development"
date: "2022-03-13"
bannerImage: "https://res.cloudinary.com/dqkwveihk/image/upload/v1686745531/pagination_i6jtpd.png"
repo: "https://github.com/ajcoldi/2023-pagination-backend"
demoLink: "http://pagination.alexc-portfolio.co.uk/"

tags:
    - example
---

## This is an pagination api demo

This demo highlights my proficiency in handling query strings in Node.js. I have developed an API that enables sorting, searching and filtering through mock data, and includes pagination functionality.

The documentation provided below offers a comprehensive guide on utilizing the API effectively.

The project itself is built with a Next.js frontend and a Node.js backend. It has been containerized using Docker and is currently hosted on an NGINX web server.

---

# API Documentation
## Get Users



Retrieves a list of users based on specified query parameters.

- URL: '/api/users'
- Method: GET

## Query Parameters

| Parameter | Type	| Default Value | Description |
| ------ | ------ | ------ | ------ |
| page | number | 1 | The page number to retrieve. |
| limit | number | 10 | The maximum number of users to retrieve per page. |
| sortBy  | string | 'id' | The field to sort the users by. Possible values: 'id', 'name', 'age', 'email', 'tags'.|
| order | string | 'asc' | The sort order. Possible values: 'asc' (ascending), 'desc' (descending). |
| tags | string | - | Comma-separated list of tags. Only users with all specified tags (or any specified tags, based on tagMode) will be included. |
| tagMode | string | 'all' | The mode to apply when filtering users by tags. Possible values: 'all', 'any'. |
| search | string | - | A search term to filter users by name or email. Case-insensitive. |

## Response

The API returns a JSON object with the following properties:

- 'results' (array): An array of user objects representing the retrieved users.
- 'total_items' (number): The total number of items (users) available.
- 'items_per_page' (number): The number of items (users) per page.
- 'current_page' (number): The current page number.
- 'first_page_link' (string): The link to the first page of results.
- 'last_page_link' (string): The link to the last page of results.
- 'sort_by' (string): The field used for sorting the users.
- 'sort_order' (string): The sort order used.
- 'next_page_link' (string, optional): The link to the next page of results if available.
- 'previous_page_link' (string, optional): The link to the previous page of results if available.

## Example

### Request:

```
GET /api/users?page=1&limit=10&sortBy=name&order=asc&tags=tag1,tag2&tagMode=all&search=john
```

### Response:

```
{
  "results": [
    {
      "id": 1,
      "name": "John Doe",
      "age": 30,
      "email": "john.doe@example.com",
      "tags": ["tag1", "tag2"]
    },
    {
      "id": 2,
      "name": "John Smith",
      "age": 35,
      "email": "john.smith@example.com",
      "tags": ["tag1", "tag3"]
    },
    // More user objects...
  ],
  "total_items": 2,
  "items_per_page": 10,
  "current_page": 1,
  "total_pages": 1,
  "first_page_link": "/api/users?page=1&limit=10&sortBy=name&order=asc&tags=tag1,tag2&tagMode=all",
  "last_page_link": "/api/users?page=1&limit=10&sortBy=name&order=asc&tags=tag1,tag2&tagMode=all",
  "sort_by": "name",
  "sort_order": "asc"
}
```


## Get User Tags

Retrieve a list of unique tags used by the users.

- URL: '/api/users/tags'
- Method: GET

### Request Example:

```
GET /api/users/tags
```

### Response Example:

```
["tag1", "tag2", "tag3"]
```
