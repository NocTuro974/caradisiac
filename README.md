Hello sir,

this project is in two parts : the back (this repo), the front(caradisiac-react).

To launch everything : 
- start the elasticsearch server
- npm start in the caradisac repo
- you can already push the data through mozilla with the localhost:9292/populate route

then
- npm start in the caradisiac-react repo
- (this may not work, depending on ... we didn't really figure out actually, even after hours of struggle) localhost:8000 will launch the react script, there is an output coming out of the node, and the display has a 1/2 chance of working

If it works : perfect 
If it doesn't work, you can :
- localhost:9292/search this will display the first ten results of peugeot models, displayed in volume descending order