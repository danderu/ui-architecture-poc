import React, {Component} from 'react'
import {Alice, AliceDomain} from '@typeform/alice'
import Bob from '@typeform/bob'
import Denis from '@typeform/denis'

export default class Charlie extends Component {
  constructor (...args) {
    super(...args)

    this.state = {
      counter: '',
      dialog: ''
    }

    this.handleActionDispatched = this.handleActionDispatched.bind(this)
  }

  componentDidMount () {
    AliceDomain
      .initialize()
      .execute()
      .then(state => {
        this.state = state
      })
  }

  handleActionDispatched ({service, useCase}) {
    AliceDomain
      .service(service)
      .useCase(useCase)
      .execute(this.state)
      .then(state => {
        this.setState(state)
      })
  }

  render () {
    return (
      <div>
        <Alice {...this.state} onActionDispatched={this.handleActionDispatched} />
        <Bob {...this.state} />
        <Denis {...this.state} />
      </div>
    )
  }
}
