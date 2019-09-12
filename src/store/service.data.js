import { desires } from "./desire.data";
import { Hindrances } from "./hindrance.data";

export const serviceList = [
  {
    name: "Ledsagerbevis",
    description:
      "Hvis du har fysiske eller psykiske funksjonshemninger kan du ha med deg en ledsager. Med et ledsagerbevis slipper ledsageren din å betale for sin billett på for eksempel offentlig transport eller kulturarrangementer.",
    limitationRatings: {
      [Hindrances.bevege.id]: 0.8,
      [Hindrances.stedsans.id]: 0.6,
      [Hindrances.syn.id]: 0.4,
      [Hindrances.balanse.id]: 0.5,
      [Hindrances.falle.id.id]: 0.1
    },
    desireRatings: {
      [desires.kommeRundtUtenforHjemmet.id]: 0.8,
      [desires.handleMat.id]: 0.5,
      [desires.kollektivTransport.id]: 0.5
    }
  },
  {
    name: "Besøkstjeneste Røde Kors",
    description:
      "Hvis du er ensom eller ønsker sosial kontakt, kan du få en besøksvenn fra Røde Kors.",
    limitationRatings: {
      [Hindrances.bevege.id]: 0.7,
      [Hindrances.stedsans.id]: 0.7,
      [Hindrances.nedstemt.id]: 0.5,
      [Hindrances.angst.id]: 0.5
    },
    desireRatings: {
      [desires.sosialisere.id]: 0.8,
      [desires.deltaSamfunn.id]: 0.2,
      [desires.hobby.id]: 0.2
    }
  },
  {
    name: "Besøkstjeneste Kirkens Bymisjon",
    description:
      "Hvis du er ensom eller ønsker sosial kontakt, kan du få en besøksvenn fra Kirkens Bymisjon.",
    limitationRatings: {
      [Hindrances.bevege.id]: 0.7,
      [Hindrances.stedsans.id]: 0.7,
      [Hindrances.nedstemt.id]: 0.5,
      [Hindrances.angst.id]: 0.5
    },
    desireRatings: {
      [desires.sosialisere.id]: 0.8,
      [desires.deltaSamfunn.id]: 0.2,
      [desires.hobby.id]: 0.2
    }
  },
  {
    name: "Fallforebyggende trim",
    description:
      "Balanse og styrketrening for deg over 60 år. Gruppetreningen ledes av en fysioterapeut. Vi holder til i lokalene til Stovner eldresenter. Du kan bruke eldresenterets transportjeneste for å komme til og fra eldresenteret.",
    limitationRatings: {
      [Hindrances.bevege.id]: 0.5,
      [Hindrances.smerter.id]: 0.1,
      [Hindrances.falle.id]: 0.7,
      [Hindrances.balanse.id]: 0.7
    },
    desireRatings: {
      [desires.sosialisere.id]: 0.5,
      [desires.kommeRundtUtenforHjemmet.id]: 0.5,
      [desires.fysiskAktivitet.id]: 0.8
    }
  },
  {
    name: "Stavgang 60+",
    description:
      "Bli med på tur, med eller uten staver. Arrangeres av Stovner eldresenter.",
    limitationRatings: {
      [Hindrances.nedstemt.id]: 0.3,
      [Hindrances.overfalt.id]: 0.3,
      [Hindrances.syn.id]: 0.4,
      [Hindrances.balanse.id]: 0.5
    },
    desireRatings: {
      [desires.hobby.id]: 0.6,
      [desires.sosialisere.id]: 0.7,
      [desires.fysiskAktivitet.id]: 0.7
    }
  },
  {
    name: "Hjelpemidler",
    description:
      "Du kan låne midlertidige hjelpemidler som for eksempel: stokk, rullator, prekestol, rullestol, toalettstol, toalettforhøyer, dusjkrakk og trykkavlastende madrass.",
    limitationRatings: {
      [Hindrances.bevege.id]: 0.7,
      [Hindrances.falle.id]: 0.7,
      [Hindrances.smerter.id]: 0.5,
      [Hindrances.balanse.id]: 0.6
    },
    desireRatings: {
      [desires.kommeRundtHjemme.id]: 0.8,
      [desires.handleMat.id]: 0.3,
      [desires.kommeRundtUtenforHjemmet.id]: 0.5,
      [desires.vaskeMeg.id]: 0.4,
      [desires.kleMeg.id]: 0.2
    }
  },
  {
    name: "Rask psykisk helsehjelp",
    description:
      "Ring oss på vår kontakttelefon, hvis du tenker at Rask psykisk helsehjelp er aktuelt for deg. Da vil vi vurdere om du er i målgruppen for tilbudet, eller om vi kan gi deg råd og assistanse til å finne den hjelpen du trenger.",
    limitationRatings: {
      [Hindrances.bevege.id]: 0.1,
      [Hindrances.angst.id]: 0.9,
      [Hindrances.nedstemt.id]: 0.6
    },
    desireRatings: {
      [desires.deltaSamfunn.id]: 0.3,
      [desires.hobby.id]: 0.1,
      [desires.sosialisere.id]: 0.2
    }
  },
  {
    name: "Vaffeltirsdag",
    description:
      "Vaffeltirsdag er et åpent, uformelt og hyggelig treffpunkt for frivillige og andre som er tilknyttet Stovner Frivilligsentral. Kom gjerne innom for å hilse på frivillige, deltakere og ansatte ved sentralen, og få mer informasjon om mulighetene for frivillig arbeid.",
    limitationRatings: {
      [Hindrances.nedstemt.id]: 0.1,
      [Hindrances.angst.id]: 0.1
    },
    desireRatings: {
      [desires.lageMat.id]: 0.2,
      [desires.deltaSamfunn.id]: 0.6,
      [desires.hobby.id]: 0.4,
      [desires.sosialisere.id]: 0.8
    }
  },
  {
    name: "Hobbygruppe",
    description:
      "Etter vaffelserveringen på tirsdager møtes frivillige og deltakere av hobbygruppa kl. 13 for å lage vakre ting sammen. Frem mot høytider lager hobbygruppa gaver som gis til de som får besøk av våre frivillige og deltakere på arrangementer som Smak av norsk jul på Frivilligsentralen.",
    limitationRatings: {
      [Hindrances.nedstemt.id]: 0.1,
      [Hindrances.angst.id]: 0.1
    },
    desireRatings: {
      [desires.deltaSamfunn.id]: 0.7,
      [desires.hobby.id]: 0.7,
      [desires.sosialisere.id]: 0.8
    }
  },
  {
    name: "Turgruppe",
    description:
      "Annenhver onsdag møtes en turglad gjeng for å besøke mange av Oslos severdigheter. Alle turer starter fra billettautomaten på Stovner T-bane kl. 10.30 hvis ikke annet er oppgitt i programmet. Turgruppa ledes av en av våre entusiastiske frivillige og er åpen for alle. Enkelte turer krever påmelding.",
    limitationRatings: {
      [Hindrances.nedstemt.id]: 0.1,
      [Hindrances.angst.id]: 0.1
    },
    desireRatings: {
      [desires.deltaSamfunn.id]: 0.6,
      [desires.hobby.id]: 0.6,
      [desires.sosialisere.id]: 0.8,
      [desires.fysiskAktivitet.id]: 0.9
    }
  },
  {
    name: "Varer levert hjem",
    description:
      "Bestill matvarer via internett eller telefon, og få de levert hjem.",
    limitationRatings: {
      [Hindrances.bevege.id]: 0.7,
      [Hindrances.stedsans.id]: 0.7,
      [Hindrances.smerter.id]: 0.6,
      [Hindrances.syn.id]: 0.4,
      [Hindrances.balanse.id]: 0.4,
      [Hindrances.nedstemt.id]: 0.2
    },
    desireRatings: {
      [desires.handleMat.id]: 0.5
    }
  },
  {
    name: "Stovner eldresenter",
    description:
      "Eldresenter for de over 60 år, som tilbyr ulike aktiviteter å delta på, samt en kafeteria. Det er mulighet for transport til og fra eldresentret mandag, onsdag og fredag..",
    limitationRatings: {
      [Hindrances.bevege.id]: 0.2,
      [Hindrances.syn.id]: 0.4,
      [Hindrances.balanse.id]: 0.4,
      [Hindrances.nedstemt.id]: 0.2,
      [Hindrances.angst.id]: 0.1
    },
    desireRatings: {
      [desires.hobby.id]: 0.6,
      [desires.sosialisere.id]: 0.9,
      [desires.lageMat.id]: 0.4
    }
  },
  {
    name: "Stovner Frisklivs- og mestringssenter",
    description:
      "Frisklivsordningen er for deg som ønsker hjelp til å komme i gang med fysisk aktivitet og et tilpasset kosthold. Du kan også delta på kurs i mestring av depresjon eller belastning.",
    limitationRatings: {
      [Hindrances.bevege.id]: 0.1,
      [Hindrances.balanse.id]: 0.1,
      [Hindrances.nedstemt.id]: 0.6,
      [Hindrances.angst.id]: 0.4
    },
    desireRatings: {
      [desires.hobby.id]: 0.5,
      [desires.sosialisere.id]: 0.7,
      [desires.lageMat.id]: 0.6,
      [desires.fysiskAktivitet.id]: 0.7,
      [desires.kleMeg.id]: 0.2,
      [desires.kontrollPenger.id]: 0.2,
      [desires.brukeInternett.id]: 0.1
    }
  },
  {
    name: "Fysioterapeut",
    description:
      "Du kan få behandling hos fysioterapeut for å få bedre bevegelighet og mindre smerter. Flere fysioterapeuter har kommunal avtale, noe som betyr at du kun betaler egenandel.",
    limitationRatings: {
      [Hindrances.bevege.id]: 0.6,
      [Hindrances.balanse.id]: 0.3,
      [Hindrances.smerter.id]: 0.6
    },
    desireRatings: {
      [desires.kommeRundtHjemme.id]: 0.6,
      [desires.kommeRundtUtenforHjemmet.id]: 0.4,
      [desires.fysiskAktivitet.id]: 0.2
    }
  },
  {
    name: "Vurderingsteam",
    description:
      "Du får hjemmebesøk av et tverrfaglig team som snakker med deg om din situasjon. Du vil også få informasjon om hvilke tilbud som finnes i din bydel, og hva som kan passe for deg.",
    limitationRatings: {
      [Hindrances.bevege.id]: 0.6,
      [Hindrances.balanse.id]: 0.4,
      [Hindrances.smerter.id]: 0.4,
      [Hindrances.angst.id]: 0.4,
      [Hindrances.falle.id]: 0.3
    },
    desireRatings: {
      [desires.kommeRundtHjemme.id]: 0.3,
      [desires.kommeRundtUtenforHjemmet.id]: 0.5,
      [desires.fysiskAktivitet.id]: 0.2,
      [desires.kollektivTransport.id]: 0.3
    }
  }
];
