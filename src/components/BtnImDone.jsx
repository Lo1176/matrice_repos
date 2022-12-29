import React from "react";

export default function BtnImDone(props) {
    return (
      <button
        className={`btn ${props.btnActive ? "btn-done" : "btn-not-done"} `}
        disabled={!props.btnActive ? true : false}
        // valide le checkbtn
        onClick={() => "toto"}
      >
        I'm done{" "}
        <span role="img" aria-label="rocket image">
          🚀
        </span>
      </button>
    );
}