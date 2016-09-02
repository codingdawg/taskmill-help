Scripts
=======

##Creating a Script

Scripts are **cloned** from your GitHub repository the first you try to run them.

Public repositories are runnable by anyone.

<div class='tm-embed' src='/a7medkamel/taskmill-help/blob/master/intro/helloworld.js' />

##Running a Script

Scripts hosted here have the same **path** as they do on GitHub. All you need to do is replace `github.com` by `github.run`.

```bash
https://github.com/a7medkamel/taskmill-help/blob/master/intro/helloworld.js
```

```bash
curl https://github.run/a7medkamel/taskmill-help/blob/master/intro/helloworld.js
             ^^^^^^^^^^
```

## Input

Your script is an [express] endpoint. The function's signature is `(req, req, next)`. All data posted or streamed to the script is available on your req object. Same goes for `query` parameters.

### Request Body
<div class='tm-embed' src='/a7medkamel/taskmill-help/blob/master/intro/req-body.js' />
> Express req.body [express:req.body]

### Request Query String
<div class='tm-embed' src='/a7medkamel/taskmill-help/blob/master/intro/req-query.js' />
> Express req.query [express:req.query]

[express]: http://expressjs.com/
[express:req.body]: http://expressjs.com/4x/api.html#req.body
[express:req.query]: http://expressjs.com/4x/api.html#req.query

## Output

Use the Response Object to write output data. You have access to multiple methods on `Response`, again these are the same as [express].

<div class='tm-embed' src='/a7medkamel/taskmill-help/blob/master/intro/helloworld.js' />
> Express Response [express:response]

[express:response]: http://expressjs.com/4x/api.html#response

### Content Type

You can set the content-type header either programaticaly or through the scripts manual.

#### Programaticaly

<div class='tm-embed' src='/a7medkamel/taskmill-help/blob/master/intro/content-type.js' />

#### Manual
<div class='tm-embed' src='/a7medkamel/taskmill-help/blob/master/manual/output.js' />


# Services

We provide built in services that you can make use of. Such services include Email, SMS, and Automated Phone Calls.

## Email

You can send emails directly from our servers.

<div class='tm-embed' src='/a7medkamel/taskmill-help/blob/master/services/email.js' />

## SMS

You can send sms directly from our servers.


<div class='tm-embed' src='/a7medkamel/taskmill-help/blob/master/services/sms.js' />


## Your own MongoDB

<div class='tm-embed' src='/a7medkamel/taskmill-help/blob/master/services/mongodb.js' />

## Cron

You can schedule your scripts to automaticaly run using our cron support.

Add a `.crontab` file to the root of your repository.

The `.crontab` file in `https://github.com/a7medkamel/taskmill-help/blob/master/.crontab` will run the helloworld.js script every minute.

The cron format is standard, but is limited to `curl` commands.

```
*/1 * * * * curl 'https://github.run/a7medkamel/taskmill-help/blob/master/helloworld.js'
```

# Manual
Each script **can** define a usage manual as a comment block. The manual is used to describe variouse aspects of the script's execution.

```javascript
/*
@title Hello World!
@input
{
  "content-type" : "text/plain",
  "example" : "Hello from TaskMill"
}
*/
```

You can define input and output contrainsts as well as additional metadata.

| attribute      | usage                                        | default     |
|----------------|----------------------------------------------|-------------|
| @title         | human readable title                         | *undefined* |
| @description   | detailed description                         | *undefined* |
| @type          | `generate`, `transform`, or `none`           | `none`      |
| @input         | json with input `content-type` and `example` | *undefined* |
| @output        | json with output `content-type`              | *undefined* |


<!-- # Local Setup

```bash
git clone https://github.com/a7medkamel/taskmill-onebox.git taskmill-onebox
cd taskmill-onebox
npm install
node index.js
```

The service will boot up and listen to port 1337.

The root page at http://localhost:1337/ will detail all the available routes.

# Run Your Own Agent

If you want to run your scripts on your own agent / cloud but still through Breadboard.io; you can boot up your own agent.

```bash
git clone https://github.com/a7medkamel/taskmill-core-agent.git taskmill-core-agent
cd taskmill-core-agent
npm install
node index.js
```

In config/default.json set the 'agent.group-id' to a unique secret id; idealy chose a long random key.

All requests that have the `run-on` header set to this unique id will be routed to your agent for execution. -->