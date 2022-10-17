import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script key="jquery" defer src="https://code.jquery.com/jquery-3.4.1.min.js"/>,
    <script key="bootstrap" defer src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"/>,
  ])
}