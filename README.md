
Getting statrted:

1. install node and npm
2. 'npm install'
3. 'npm run dev'

That's it.
The dev script runs the frontend and backend concurrently.
It's avaliable at localhost:8080

We use 
- mLab (for the mongo DB hosting)
- google oAuth (login verification)
- Redux with thunk (dispatching actions)
- axios (http client)

Code guidelines

Always create a class for components - you never know when you might have to add more

The methods in the class should be in this order
1. constructor
2. lifecycle methods (except render)
3. handler methods (handle submit or input)
4. other helpers
5. output methods (things that produce xml)
6. render 
