import React from 'react'

import stylesheet from 'styles/index.scss'
// or, if you work with plain css
// import stylesheet from 'styles/index.css'

export default () =>
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

	<div className="container is-fluid">
	  <div className="notification">
	    This container is <strong>fluid</strong>: it will have a 20px gap on either side, on any viewport size.
	  </div>
	</div>

	<section className="hero">
	  <div className="hero-body">
	    <div className="container">
	      <h1 className="title">
	        Hero title
	      </h1>
	      <h2 className="subtitle">
	        Hero subtitle
	      </h2>
	    </div>
	  </div>
	</section>
  </div>
