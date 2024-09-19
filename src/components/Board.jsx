import React from "react";
import Internship from './Internship'


const Board = () => {
    return (
        <div>
            <table>
                <tbody>
                    <tr className="Internships">
                        <Internship image='' name='FaceBook' deadline=''/>
                        <Internship image='' name='Apple' deadline=''/>
                        <Internship image='' name='Amazon' deadline=''/>
                        <Internship image='' name='Netflix' deadline=''/>
                        <Internship image='' name='Google' deadline=''/>
                    </tr>
                    <tr className="Internships">
                        <Internship image='' name='Microsoft' deadline=''/>
                        <Internship image='' name='HEB' deadline=''/>
                        <Internship image='' name='Visa' deadline=''/>
                        <Internship image='' name='Capital One' deadline=''/>
                        <Internship image='' name='NVDIA' deadline=''/>
                    </tr>
                    <tr className="Internships">
                        <Internship image='' name='Roblox' deadline=''/>
                        <Internship image='' name='Dell' deadline=''/>
                        <Internship image='' name='IBM' deadline=''/>
                        <Internship image='' name='Intel' deadline=''/>
                        <Internship image='' name='Pinterest' deadline=''/>
                    </tr>
                    <tr className="Internships">
                        <Internship image='' name='Goldman Sachs' deadline=''/>
                        <Internship image='' name='SalesForce' deadline=''/>
                        <Internship image='' name='DoorDash' deadline=''/>
                        <Internship image='' name='Wells Fargo' deadline=''/>
                        <Internship image='' name='DraftKings' deadline=''/>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Board;