import { Hindrances } from "./hindrance.data";

const DESIRE = Object.freeze({
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

export const desires = {
  [DESIRE.kleMeg]: {
    id: DESIRE.kleMeg,
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
  [DESIRE.lageMat]: {
    id: DESIRE.lageMat,
    text: "Lage mat",
    textDefinite: "lage mat",
    hindrances: [
      Hindrances.bevege.id,
      Hindrances.smerter.id,
      Hindrances.nedstemt.id,
      Hindrances.syn.id
    ]
  },
  [DESIRE.vaskeMeg]: {
    id: DESIRE.vaskeMeg,
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
  [DESIRE.kommeRundtHjemme]: {
    id: DESIRE.kommeRundtHjemme,
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
  [DESIRE.kommeRundtUtenforHjemmet]: {
    id: DESIRE.kommeRundtUtenforHjemmet,
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
  [DESIRE.kollektivTransport]: {
    id: DESIRE.kollektivTransport,
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
  [DESIRE.handleMat]: {
    id: DESIRE.handleMat,
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
  [DESIRE.brukeInternett]: {
    id: DESIRE.brukeInternett,
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
  [DESIRE.kontrollPenger]: {
    id: DESIRE.kontrollPenger,
    text: "Ha kontroll på pengene mine",
    textDefinite: "ha kontroll på pengene dine",
    hindrances: [
      Hindrances.angst.id,
      Hindrances.nedstemt.id,
      Hindrances.syn.id,
      Hindrances.digitalKompetanse.id
    ]
  },
  [DESIRE.deltaSamfunn]: {
    id: DESIRE.deltaSamfunn,
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
  [DESIRE.vaskeHjemme]: {
    id: DESIRE.vaskeHjemme,
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
  [DESIRE.hobby]: {
    id: DESIRE.hobby,
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
  [DESIRE.fysiskAktivitet]: {
    id: DESIRE.fysiskAktivitet,
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
  [DESIRE.sosialisere]: {
    id: DESIRE.sosialisere,
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
