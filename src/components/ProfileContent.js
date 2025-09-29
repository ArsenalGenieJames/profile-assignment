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
          Here my portfolio link: <a href="https://geniejamesarsenal.vercel.app/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Genie James Arsenal </a>
           currently open for freelance work, so if you have a project in mind, feel free to reach out! , now my portfolio has no content yet because im under construction.
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Contact Information</h2>
          <div className="bg-gray-50 p-4 rounded">
            <div className="mb-2">
              <span className="font-semibold">Address:</span>
              <p className="text-gray-700">Iligan City , Philippines</p>
            </div>
            <div>
              <span className="font-semibold">Email Address:</span>
              <p className="text-gray-700">geniejamesarsenal.202300349@gmail.com</p>
            </div>
          </div>
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
              <h3 className="font-semibold mb-2">Skills</h3>
              <ul className="list-disc pl-5">
                <li>JavaScript</li>
                <li>Php</li>
                <li>Java</li>
                <li>Figma</li>
                <li>Adobe Creative Suite</li>
                <li>Static Ads</li>
                <li>Motion Graphics</li>
                <li>Video Editing</li>
                <li>UGC Videos</li>
                <li>Reels Videos</li>
                <li>Amazon Listing(SEO)</li>
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