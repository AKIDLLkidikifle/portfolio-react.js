import  "boxicons";
import { useState } from "react";

function Footer(){

return(
<div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        {/* <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
      </a>
     
      <span className="mb-3 mb-md-0 text-body-secondary">© 2024  kidi :)</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className="text-body-secondary" href="https://telegram.com/kd_65"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAblJREFUSEvV1TtoVEEYxfFflKCFBhEhhQTxAakEBUUI0YiFdoKigkUSHynEVsEU6RIiBOxCxEItVXygoIWVIBLBThBMEwgqpAiIYGEQfNwPZuVy2bsvs4hT7e7MnP835zsz26HNo6PN+v5LwD5sw51wZ6VOsAGDOIdd+IquvwWswhGcwTF05vr5AVtaBWzHeQxhcxJdxM/c94c40QxgHU4mC/pzlf7CDJ4mz8OqGFcw1QhgP84m8YDkx/sE3IQHWJObPIQXZYA49nAS3lHlnnzPxK5iEqdxC9GPygirophvRcAeTOBwjXS9Tv5H9WMYr1LAO+ys/J6P6VzmY2/JzY7YjeJ6mp/GxZK1NzFSDbA6820g+R2x606LnuFCtulTiuJdHK/xxMTaG9UA+T3h6UFEKh6lifXZJXqMaGCtERftbT1AUSCa9hK764gvpwb/aBawF2/qiMf0K0S0/4xG36JI1vO06zM2lsCu4XIrgFO4h0jaARxFJGltARTr7rcCiGRcQh+WkkBk/Qm25gTj80IrgBD7iC+FiuNJvp1iGzHuKVrXaA/q9Tf+C+azV2C2XYDSAlbqBP8O8BtHxEAZRG4wGQAAAABJRU5ErkJggg=="/></a></li>
        <li className="ms-3"><a className="text-body-secondary" href="https://linkedin.com/in/kidist-kifle1047"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASxJREFUSEvl1TsvBFEYh/HfCp2Igso3oNXoKFQKIa6hk/AtJD6GS4m4h0InLo1G7xPoRKUl7Elem81erZndxlQzOe88z5z/Oe+cgjZfhTbzdVxwh/GMs7rHxA+jcgZfGeFV3EaC66ie+oO0xK0nOMBqgA+x3KKkqWAX6wHdw1regnfsowsr6M1b8IrngA5jsLgzHuJ5CP3YxgdGMFfxAU0jOsZSvHSERUo9M4MnvJRBN4vjW2XPTQUnAU3vJNlCxFVvG3fjDX0hySTowRVGQ5waK12PGMtDkLr0NkA72Ij7S0znIUhrcBGgWlGmoaYRncb0U3GCzCPl/IlZnIfgLMbK6/6JoFGjDURzpShq1f0qohb/DFXldRc5jwPnBpM/yo4fmVmjqZ9V7uQAfgNR+VIZag7oTQAAAABJRU5ErkJggg=="/></a></li>      
        <li className="ms-3"><a className="text-body-secondary" href="https://github.com/AKIDLLkidikifle"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAjBJREFUSEu11UnIjlEUB/DfJ7IhCyRZosxFslCKKGFjKEOKEjKlJGOJZAglkiHsCCXDhh0LC5SIjEWysDAkC1KIPOfrvnW/53uHx+I7m/e99/7P/Z9z7jn/p00XW1sX368VQQ/MxgyMxlDafd7hCW4W+1fwu1GgzQim4SSGtMjyLVbiVj1cI4It2J+irVLFv9iKQ2VwPYLNOFDl1jqYDTiS75cJpqRUYz/quwyrsQPd8CbVezgi6n04gWOYl/Ym4W6NJCfoiecYnA53Y2f6H+/wEd/SuhcG4nVab8fe9P8FxhRB/Yl1TrAAl7L0ItVIuYodxKYMOCtVoAPB+SKixRloIu5VuT1F/DgL+DjWlTOI8ozI0hxZ8fIa7CHGpcWDIoMJZYJP6J8A14tBmvOfBBewKPl8Qb8ywYdisAYkwG1M/U+CG5iZfL6jd5ngEcYmQHRL32YSUCIPSfmMPmn/FaKVOzzyGSzPHFfgbMUsAns6w57DkjJB1PwqviJSjD6P8Q89+tGAKOZhbRq4GMSazcflMkHMRHTSoKI9p2MVluJX6umF+JluiJJcS7juJfKXGJWmupNcz03y+x7j0+BNTlmsKV10EUFatqhEdGG71RO7o1if9GdPkzfYlUlJDXa4kJONuU8juQ5xCy26U4jYUzzDqRJZnAeuZqHCleS65hCqGHoU0xnyHQ+eWyjpNtxPmhW/nazVJzPO45MZMh2Z5DYs9Xo8dkNrRdDMt9JZlxP8A6W4YxlKv0WFAAAAAElFTkSuQmCC"/></a></li>
    </ul>
  </footer>
</div>        
)
}

export default Footer;