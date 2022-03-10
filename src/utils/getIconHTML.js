export function getIconHTML(emoji, title, info) {
    const html = `
    
      <div class="marker" style="
          background-color: white;
          border-radius: 25px;
          display: flex;
          flex-direction: row;
          width: 120px;
          height: 50px;
          padding: 0 10px;
          align-items: center;
          border: 2px solid #2b6bf3;
      ">
          <p id="emoji" style="
              width: 40px;
              height: 40px;
          "/>
          <label style="
          font-size:30px;
          ">${emoji}</label>
          
          <div id="icon_info" style="
              display: flex;
              flex-direction: column;
              padding: 0 5px;
              height: 100%
              font-size: 16px;
          ">
              
              <label>${title}</label>
              <label>${info}</label>
          </div>
      </div>`;
    return html;
  }
  