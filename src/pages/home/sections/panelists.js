import React from 'react'
import Person from '../../../components/person'
import Decor from '../../../components/decor'

export default Panelists

function Panelists({panelists}) {
  return (
    <section className="panelists" id="panelists">
      <Decor />
      <div className="panelists__container">
        <h2>Panelists</h2>

        <div className="person-group +space-children">
          {panelists.map((p, i) => <Person className="panelists__panelist" {...p} key={i} />)}
        </div>

      </div>
    </section>
  )
}
