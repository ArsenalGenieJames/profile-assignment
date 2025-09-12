import React from "react";

function ProfileContent() {
  return (
    <main className="flex-1 p-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">About Me</h2>
          <p className="text-gray-700 mb-4">
            I'm a Graphic Designer, Motion Graphics Artist, and Video Editor. I work at Seven Studio as a full-time UI Designer. I'm a third-year Tech Student at St. Peter College. I'm also a Ministry Person serving God.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Education</h2>
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold">Bachelor of Science in Information Technology</h3>
            <p>St. Peter College</p>
            <p>Expected Graduation: 2027</p>
            <p>Current GPA: 1.9</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Programming Languages</h3>
              <ul className="list-disc pl-5">
                <li>JavaScript</li>
                <li>Php</li>
                <li>Java</li>
                <li>Figma</li>
                <li>Adobe Creative Suite</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tools & Technologies</h3>
              <ul className="list-disc pl-5">
                <li>Git</li>
                <li>VS Code</li>
                <li>Node.js</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Interests</h2>
          <ul className="list-disc pl-5">
            <li>Web Development</li>
            <li>Artificial Intelligence</li>
            <li>Open Source Projects</li>
            <li>Game Development</li>
            <li>Graphic Design</li>
            <li>Video Editing</li>
            <li>Photography</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default ProfileContent;