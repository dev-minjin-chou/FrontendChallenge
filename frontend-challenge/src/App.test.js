import React from "react";
// Test useEffect function has been called.
it("Test useEffect function", () => {
    let useEffect;
    const mockUseEffect = () => {
        useEffect.mockImplementationOnce(f => f());
      };
      useEffect = jest.spyOn(React, "useEffect");
      mockUseEffect();
  });