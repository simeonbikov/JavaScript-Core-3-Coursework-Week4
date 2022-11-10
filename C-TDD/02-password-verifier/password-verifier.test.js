let verify = require("./password-verifier");

test("returns 'Password accepted' if the password is: '09fgh234jB2'", function () {
  expect(verify("09fgh234jB2")).toEqual("Password accepted");
});

test("returns 'Password rejected' if the password does not have a number: 'vftRHFhjk'", function () {
  expect(verify("vftRHFhjk")).toEqual("Password rejected");
});

test("returns 'Password rejected' if the password does not have uppercase: '09fgh234jb2'", function () {
  expect(verify("09fgh234jb2")).toEqual("Password rejected");
});

test("returns 'Password rejected' if the password is too short: 'hgS214d'", function () {
  expect(verify("hgS214d")).toEqual("Password rejected");
});

test("returns 'Password rejected' if the password is not a string: 123456789", function () {
  expect(verify(123456789)).toEqual("Password rejected");
});

test("returns 'Password rejected' if the password is null", function () {
  expect(verify(null)).toEqual("Password rejected");
});

test("returns 'Password rejected' if the password contains whitespace", function () {
  expect(verify("1j47h 9FF8")).toEqual("Password rejected");
});
