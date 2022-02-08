import React,{ ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ( props ) => (
  <div>
   
    <div className="layout">{props.children}</div>
    <style jsx global>{`
      html {
        box-sizing: border-box;
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
      body {
        margin: 0;
        padding: 0;
    
      }
    
    `}</style>
    <style jsx>{`
      .layout {
        padding: 0 2rem;
      }
    `}</style>
  </div>
)


export default Layout