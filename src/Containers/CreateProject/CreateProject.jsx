import React from 'react';
import EventComponent from '../../Components/EventComponent/EventComponent';
import ProjectDesciptionComponent from '../../Components/ProjectDescription/ProjectDescription';
import RequirementsComponent from '../../Components/RequirementsComponent/RequirementsComponent';

export default function CreateProject() {
  return (
    <>
      <ProjectDesciptionComponent />
      <br />
      <EventComponent />
      <br />
      <RequirementsComponent />
    </>
  );
}
