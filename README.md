# getir

Running App: https://getir-mert.herokuapp.com

## Development and Test

Installing Instructions.

- Clone the project.
- Open a terminal, cd into cloned project folder
- Run "npm install".
- Run "npm start"

For Test: Run "npm test"

## Methods

_`POST /records`_

### Request

Body must be a JSON.

```
{
    "startDate": "2019-01-01",
    "endDate": "2019-10-31",
    "minCount": 100,
    "maxCount": 900
}
```

### Response 

```
{
    "code":0,
    "msg":"Success",
    "records":[
        {
            "key":"TAKwGc6Jr4i8Z487",
            "createdAt":"2017-01-28T01:22:14.398Z",
            "totalCount":2800
        },
        {
            "key":"NAeQ8eX7e5TEg7oH",
            "createdAt":"2017-01-27T08:19:14.135Z",
            "totalCount":2900
        }
    ]
}
```
