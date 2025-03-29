import { useState } from "react";
import Confetti from "react-confetti";

export default function TuffyBirthdayGame() {
  const [step, setStep] = useState(0);
  const [outfit, setOutfit] = useState("");
  const [color, setColor] = useState("");
  const [design, setDesign] = useState("");
  const [cake, setCake] = useState("");
  const [gift, setGift] = useState("");

  const nextStep = () => setStep(step + 1);

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">Tuffy's Birthday Game</h1>
      {step === 0 && (
        <div>
          <p>What should Tuffy wear - bandana or coat?</p>
          <button onClick={() => { setOutfit("bandana"); nextStep(); }}>Bandana</button>
          <button onClick={() => { setOutfit("coat"); nextStep(); }}>Coat</button>
        </div>
      )}
      {step === 1 && outfit === "bandana" && (
        <div>
          <p>Amazing! Which color should he wear? Red or Blue?</p>
          <button onClick={() => { setColor("red"); nextStep(); }}>Red</button>
          <button onClick={() => { setColor("blue"); nextStep(); }}>Blue</button>
        </div>
      )}
      {step === 1 && outfit === "coat" && (
        <div>
          <p>Great! Which design should he wear? Polka dot or check?</p>
          <button onClick={() => { setDesign("polka dot"); nextStep(); }}>Polka dot</button>
          <button onClick={() => { setDesign("check"); nextStep(); }}>Check</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <p>Now, what cake should we get for Tuffy? Chicken or Peanut Butter?</p>
          <button onClick={() => { setCake("chicken"); nextStep(); }}>Chicken</button>
          <button onClick={() => { setCake("peanut butter"); nextStep(); }}>Peanut Butter</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <p>What surprise gift should we get? A squeaky toy or a comfy bed?</p>
          <button onClick={() => { setGift("squeaky toy"); nextStep(); }}>Squeaky Toy</button>
          <button onClick={() => { setGift("comfy bed"); nextStep(); }}>Comfy Bed</button>
        </div>
      )}
      {step === 4 && (
        <div>
          <Confetti />
          <h2 className="text-xl font-bold">Tuffy's Birthday Plan</h2>
          <p>Outfit: {outfit} {color && `(${color})`} {design && `(${design})`}</p>
          <p>Cake: {cake}</p>
          <p>Gift: {gift}</p>
          <p>Thanks for helping plan an amazing birthday for Tuffy!</p>
        </div>
      )}
    </div>
  );
}
