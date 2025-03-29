import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);
  const [outfit, setOutfit] = useState("");
  const [color, setColor] = useState("");
  const [design, setDesign] = useState("");
  const [cake, setCake] = useState("");
  const [gift, setGift] = useState("");
  
  return (
    <div className="p-5 text-center bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {step === 0 && (
        <div>
          <h1 className="text-2xl font-bold">Hello, Welcome to the story game!</h1>
          <p className="text-lg mt-2">Tomorrow is Tuffy's birthday, pet dog of Riddhi.</p>
          <p>Can you help her decide what all she should get to make his birthday special?</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setStep(1)}>Start</button>
        </div>
      )}
      
      {step === 1 && (
        <div>
          <p>What should Tuffy wear - bandana or coat?</p>
          <button onClick={() => { setOutfit("bandana"); setStep(2); }} className="m-2 px-4 py-2 bg-green-500 text-white rounded">Bandana</button>
          <button onClick={() => { setOutfit("coat"); setStep(3); }} className="m-2 px-4 py-2 bg-green-500 text-white rounded">Coat</button>
        </div>
      )}

      {step === 2 && outfit === "bandana" && (
        <div>
          <p>Amazing! Which color should he wear? Red or Blue?</p>
          <button onClick={() => { setColor("red"); setStep(4); }} className="m-2 px-4 py-2 bg-red-500 text-white rounded">Red</button>
          <button onClick={() => { setColor("blue"); setStep(4); }} className="m-2 px-4 py-2 bg-blue-500 text-white rounded">Blue</button>
        </div>
      )}

      {step === 3 && outfit === "coat" && (
        <div>
          <p>Great! Which design should he wear? Polka dot or check?</p>
          <button onClick={() => { setDesign("polka dot"); setStep(4); }} className="m-2 px-4 py-2 bg-purple-500 text-white rounded">Polka Dot</button>
          <button onClick={() => { setDesign("check"); setStep(4); }} className="m-2 px-4 py-2 bg-gray-500 text-white rounded">Check</button>
        </div>
      )}
      
      {step === 4 && (
        <div>
          <p>Now, what cake should we get for Tuffy? Chicken or Peanut Butter?</p>
          <button onClick={() => { setCake("chicken"); setStep(5); }} className="m-2 px-4 py-2 bg-yellow-500 text-white rounded">Chicken</button>
          <button onClick={() => { setCake("peanut butter"); setStep(5); }} className="m-2 px-4 py-2 bg-orange-500 text-white rounded">Peanut Butter</button>
        </div>
      )}
      
      {step === 5 && (
        <div>
          <p>What surprise gift should we get? A squeaky toy or a comfy bed?</p>
          <button onClick={() => { setGift("squeaky toy"); setStep(6); }} className="m-2 px-4 py-2 bg-pink-500 text-white rounded">Squeaky Toy</button>
          <button onClick={() => { setGift("comfy bed"); setStep(6); }} className="m-2 px-4 py-2 bg-indigo-500 text-white rounded">Comfy Bed</button>
        </div>
      )}
      
      {step === 6 && (
        <div>
          <h2 className="text-xl font-bold">Yay! Thanks for helping Riddhi plan an amazing birthday for Tuffy!</h2>
          <button onClick={() => setStep(0)} className="mt-4 px-4 py-2 bg-blue-700 text-white rounded">Play Again</button>
        </div>
      )}
    </div>
  );
}
