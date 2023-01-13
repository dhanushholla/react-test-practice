import React from 'react'

export const Application = () => {
  return (
    <>
    <h1>Job application</h1>
    <h2>Section 1</h2>
    <p>lorem</p>
    <span title="close">close</span>
    <div data-testid="id1">testing the getbytestid</div>
    <form>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder='name?' value='Dhanush' onChange={()=>{}} alt='yarra nee?'/>
        </div>
        <div>
            <label htmlFor="bio">Bio</label>
            <textarea name="bio" id="bio" />
        </div>
        <div>
            <label htmlFor="job-location">job location</label>
            <select id="job-location">
                <option value="">select a place</option>
                <option value="TN">Tamil Nadu</option>
                <option value="KL">Kerela</option>
                <option value="KA">Karnataka</option>
            </select>
        </div>
        <div>
            <label >
                <input type="checkbox" id="terms"/> I agree to terms and consitions
            </label>
        </div>
        <div>
            <label > I agree to terms and consitions
            </label>
        </div>
        <button>submit</button>
    </form>
    </>
  )
}
