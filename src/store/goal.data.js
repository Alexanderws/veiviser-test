import { Hindrances } from "./hindrance.data";

const GOAL = Object.freeze({
  kleMeg: "kleMeg",
  lageMat: "lageMat",
  vaskeMeg: "vaskeMeg",
  kommeRundtHjemme: "kommeRundtHjemme",
  kommeRundtUtenforHjemmet: "kommeRundtUtenforHjemmet",
  kollektivTransport: "kollektivTransport",
  handleMat: "handleMat",
  brukeInternett: "brukeInternett",
  kontrollPenger: "kontrollPenger",
  deltaSamfunn: "deltaSamfunn",
  vaskeHjemme: "vaskeHjemme",
  hobby: "hobby",
  fysiskAktivitet: "fysiskAktivitet",
  sosialisere: "sosialisere"
});

export const goals = {
  [GOAL.kleMeg]: {
    id: GOAL.kleMeg,
    text: "Kle meg",
    textDefinite: "kle deg",
    hindrances: [
      Hindrances.bevege.id,
      Hindrances.balanse.id,
      Hindrances.smerter.id,
      Hindrances.falle.id,
      Hindrances.syn.id
    ]
  },
  [GOAL.lageMat]: {
    id: GOAL.lageMat,
    text: "Lage mat",
    textDefinite: "lage mat",
    hindrances: [
      Hindrances.bevege.id,
      Hindrances.smerter.id,
      Hindrances.nedstemt.id,
      Hindrances.syn.id
    ]
  },
  [GOAL.vaskeMeg]: {
    id: GOAL.vaskeMeg,
    text: "Vaske og stelle meg",
    textDefinite: "vaske og stelle deg",
    hindrances: [
      Hindrances.bevege.id,
      Hindrances.balanse.id,
      Hindrances.smerter.id,
      Hindrances.falle.id,
      Hindrances.nedstemt.id,
      Hindrances.syn.id
    ]
  },
  [GOAL.kommeRundtHjemme]: {
    id: GOAL.kommeRundtHjemme,
    text: "Komme meg rundt i mitt eget hjem",
    textDefinite: "komme deg rundt i eget hjem",
    hindrances: [
      Hindrances.bevege.id,
      Hindrances.balanse.id,
      Hindrances.smerter.id,
      Hindrances.falle.id,
      Hindrances.stedsans.id,
      Hindrances.syn.id
    ]
  },
  [GOAL.kommeRundtUtenforHjemmet]: {
    id: GOAL.kommeRundtUtenforHjemmet,
    text: "Komme meg fra A til B utenfor hjemmet",
    textDefinite: "komme deg fra A til B utenfor hjemmet",
    hindrances: [
      Hindrances.bevege.id,
      Hindrances.balanse.id,
      Hindrances.smerter.id,
      Hindrances.angst.id,
      Hindrances.falle.id,
      Hindrances.nedstemt.id,
      Hindrances.stedsans.id,
      Hindrances.overfalt.id,
      Hindrances.syn.id,
      Hindrances.hørsel.id
    ]
  },
  [GOAL.kollektivTransport]: {
    id: GOAL.kollektivTransport,
    text: "Bruke kollektivtransport og drosje",
    textDefinite: "bruke kollektivtransport og drosje",
    hindrances: [
      Hindrances.bevege.id,
      Hindrances.balanse.id,
      Hindrances.smerter.id,
      Hindrances.angst.id,
      Hindrances.falle.id,
      Hindrances.stedsans.id,
      Hindrances.overfalt.id,
      Hindrances.syn.id,
      Hindrances.hørsel.id,
      Hindrances.digitalKompetanse.id
    ]
  },
  [GOAL.handleMat]: {
    id: GOAL.handleMat,
    text: "Handle mat og andre varer",
    textDefinite: "handle mat og andre varer",
    hindrances: [
      Hindrances.bevege.id,
      Hindrances.balanse.id,
      Hindrances.smerter.id,
      Hindrances.angst.id,
      Hindrances.falle.id,
      Hindrances.stedsans.id,
      Hindrances.overfalt.id,
      Hindrances.syn.id,
      Hindrances.digitalKompetanse.id
    ]
  },
  [GOAL.brukeInternett]: {
    id: GOAL.brukeInternett,
    text:
      "Å bruke mobil, internett, f.eks. e-post, nettbank, Facebook e.l.",
    textDefinite:
      "bruke mobil, internett, f.eks. e-post, nettbank, Facebook e.l.",
    hindrances: [
      Hindrances.bevege.id,
      Hindrances.angst.id,
      Hindrances.nedstemt.id,
      Hindrances.syn.id,
      Hindrances.digitalKompetanse.id
    ]
  },
  [GOAL.kontrollPenger]: {
    id: GOAL.kontrollPenger,
    text: "Ha kontroll på pengene mine",
    textDefinite: "ha kontroll på pengene dine",
    hindrances: [
      Hindrances.angst.id,
      Hindrances.nedstemt.id,
      Hindrances.syn.id,
      Hindrances.digitalKompetanse.id
    ]
  },
  [GOAL.deltaSamfunn]: {
    id: GOAL.deltaSamfunn,
    text: "Å kunne delta i samfunnet og føle meg nyttig for andre",
    textDefinite: "kunne delta i samfunnet og føle deg nyttig for andre",
    hindrances: [
      Hindrances.bevege.id,
      Hindrances.angst.id,
      Hindrances.nedstemt.id,
      Hindrances.syn.id,
      Hindrances.hørsel.id,
      Hindrances.digitalKompetanse.id
    ]
  },
  [GOAL.vaskeHjemme]: {
    id: GOAL.vaskeHjemme,
    text: "Holde orden hjemme",
    textDefinite: "holde orden hjemme",
    hindrances: [
      Hindrances.bevege.id,
      Hindrances.balanse.id,
      Hindrances.smerter.id,
      Hindrances.falle.id,
      Hindrances.nedstemt.id,
      Hindrances.syn.id
    ]
  },
  [GOAL.hobby]: {
    id: GOAL.hobby,
    text: "Å ha noe å fylle dagen med, f.eks. en hobby",
    textDefinite: "ha noe å fylle dagen med, f.eks. en hobby",
    hindrances: [
      Hindrances.bevege.id,
      Hindrances.balanse.id,
      Hindrances.falle.id,
      Hindrances.nedstemt.id,
      Hindrances.syn.id,
      Hindrances.digitalKompetanse.id
    ]
  },
  [GOAL.fysiskAktivitet]: {
    id: GOAL.fysiskAktivitet,
    text: "Mosjonere og trene",
    textDefinite: "mosjonere og trene",
    hindrances: [
      Hindrances.bevege.id,
      Hindrances.balanse.id,
      Hindrances.smerter.id,
      Hindrances.angst.id,
      Hindrances.falle.id,
      Hindrances.nedstemt.id,
      Hindrances.stedsans.id,
      Hindrances.overfalt.id,
      Hindrances.syn.id
    ]
  },
  [GOAL.sosialisere]: {
    id: GOAL.sosialisere,
    text: "Være sammen med folk",
    textDefinite: "være sammen med folk",
    hindrances: [
      Hindrances.bevege.id,
      Hindrances.balanse.id,
      Hindrances.smerter.id,
      Hindrances.angst.id,
      Hindrances.nedstemt.id,
      Hindrances.syn.id,
      Hindrances.hørsel.id,
      Hindrances.digitalKompetanse.id
    ]
  }
};
