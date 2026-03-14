
import { createRoot } from 'react-dom/client'
import './index.css'
export const Main=()=>{
return(
  <div>
  <h1 class="heading">Heading</h1>
  <div id="1">
    <div id="2">
      <h1 class="heading">Nested Heading1</h1>
      <h1 class="heading">Nested Heading2</h1>
    </div>
  </div>
  </div>
);
}

createRoot(document.getElementById('root')).render(
 <Main/>
)
