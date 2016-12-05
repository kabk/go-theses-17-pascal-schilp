import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import References from '../containers/references';
import Images from '../containers/images';


require('../../scss/style.scss');

const App = () => (
    <div>


		<div className="row">

   
		    <div id="index" className="col-sm-2 col-sm-push-9">
		    	<div className="affix">
	    	        <UserList />
				</div>
			</div>


		    <div id="marginleft" className="col-sm-1 col-sm-pull-2"><div className="affix-left"></div></div>


		    <div id="mainText" className="col-sm-5 col-sm-push-1">

			        <UserDetails />

		    </div>


		    <div id="references" className="col-sm-1 col-sm-pull-7"><References/></div>

		    <div id="memes" className="col-sm-2 col-sm-pull-7"><Images/></div>


			<div id="marginright" className="col-sm-1"></div>

		</div>


    </div>
);

export default App;
