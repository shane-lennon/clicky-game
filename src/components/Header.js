import React from "react";

const Header = props => (
  <div>
    <table style={tableStyle}>
      <tbody>
        <tr>
          <td style={tdStyle}>{props.children}</td>
          <td style={tdStyle}>{props.message}</td>
          <td style={tdStyle}>Score: {props.score} Highscore: {props.highscore}</td>
        </tr>
      </tbody>
    </table>
    <h4 style={h4Style}>Clicky Game! Click on an image to earn points, but don't click the same image twice!</h4>
  </div>
);

const tableStyle = {
  width: "100%",
  fontSize: "2rem",
  backgroundColor: '#000000',
  color: '#CCCCCC',
  marginBottom: '10px',
  display: 'inlineBlock'
}

const tdStyle = {
  textAlign: 'center',
  width: '33.3%'
}

const h4Style = {
  color: "#CCCCCC",
  textAlign: 'center'
}

export default Header;
