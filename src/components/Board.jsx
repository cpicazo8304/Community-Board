import React from "react";
import Internship from './Internship'
import appleImg from './apple.jpg'
import visaImg from './visa.jpg'
import netflixImg from './netflix.jpg'
import pinterestImg from './pinterest.jpg'
import microsoftImg from './microsoft.jpg'
import hebImg from './heb.jpg'
import janestreetImg from './janestreet.jpg'
import nvidiaImg from './NVIDIA.jpg'
import robloxImg from './roblox.jpg'
import adobeImg from './adobe.jpg'
import ibmImg from './ibm.jpg'
import intelImg from './intel.jpg'
import jpmorganImg from './jpmorgan.jpg'
import salesforceImg from './salesforce.jpg'
import doordashImg from './doordash.jpg'
import wellsfargoImg from './wells-fargo.jpg'



const Board = () => {
    return (
        <div>
            <table>
                <tbody>
                    <tr className="Internships">
                        <Internship image={appleImg} name='Apple' location='Multiple Locations' url='https://jobs.apple.com/en-us/details/200554359/software-engineering-internships?team=STDNT'/>
                        <Internship image={visaImg}name='Visa' location='Austin, TX' url='https://jobs.smartrecruiters.com/Visa/744000014255255-software-engineer-intern?source=LinkedIn'/>
                        <Internship image={netflixImg} name='Netflix' location='Los Gatos, Los Angeles, CA' url='https://explore.jobs.netflix.net/careers/job/790298739171?domain=netflix.com&utm_source=LinkedIn'/>
                        <Internship image={pinterestImg} name='Pinterest' location='Remote' url='https://www.pinterestcareers.com/jobs/6210381/software-engineering-intern-2025-usa/?source=linkedin_limited_listing&utm_source=linkedin_limited_listing&gh_jid=6210381'/>
                    </tr>
                    <tr className="Internships">
                        <Internship image={microsoftImg} name='Microsoft' location='Multiple Locations' url='https://jobs.careers.microsoft.com/global/en/job/1769194/Software-Engineer%3A-Internship-Opportunities---CTJ---Top-Secret'/>
                        <Internship image={hebImg} name='HEB' location='Multiple Locations in TX' url='https://interns-heb.icims.com/jobs/132778/internship---software-engineer/job'/>
                        <Internship image={janestreetImg} name='Jane Street' location='New York' url='https://www.janestreet.com/join-jane-street/position/7527332002/'/>
                        <Internship image={nvidiaImg} name='NVDIA' location='Santa Clara, CA  Remote' url='https://nvidia.wd5.myworkdayjobs.com/en-US/NVIDIAExternalCareerSite/job/US-CA-Santa-Clara/NVIDIA-2025-Internships--Software-Engineering_JR1986535?workerSubType=0c40f6bd1d8f10adf6dae42e46d44a17&locationHierarchy1=2fcb99c455831013ea52fb338f2932d8'/>
                    </tr>
                    <tr className="Internships">
                        <Internship image={robloxImg} name='Roblox' location='San Mateo, CA' url='https://careers.roblox.com/jobs/6086765'/>
                        <Internship image={adobeImg} name='Adobe' location='Multiple Locations' url='https://careers.adobe.com/us/en/job/R147746/2025-Intern-Software-Engineer'/>
                        <Internship image={ibmImg} name='IBM' location='Multiple Locations' url='https://careers.ibm.com/job/21044573/software-developer-intern-remote/?codes=WEB_SEARCH_NA'/>
                        <Internship image={intelImg} name='Intel' location='Toronto, Ontario, Canada' url='https://jobs.intel.com/en/job/toronto/software-and-ip-engineering-internship-positions/41147/69842310128'/>
                    </tr>
                    <tr className="Internships">
                        <Internship image={jpmorganImg} name='JPMorganChase' location='Multiple Locations' url='https://careers.jpmorgan.com/us/en/students/programs/software-engineer-summer'/>
                        <Internship image={salesforceImg} name='SalesForce' location='Multiple Locations' url='https://careers.salesforce.com/en/jobs/jr262842/summer-2025-intern-software-engineer/'/>
                        <Internship image={doordashImg} name='DoorDash' location='Multiple Locations' url='https://careers.doordash.com/jobs/software-engineer-intern-2024-25-university-recruiting/6247016/'/>
                        <Internship image={wellsfargoImg} name='Wells Fargo' location='Multiple Locations' url='https://www.wellsfargojobs.com/en/jobs/r-385829/2025-technology-summer-internship-early-careers-software-or-data-engineer/'/>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Board;