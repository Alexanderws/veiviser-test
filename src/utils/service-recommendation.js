// RecommendationService

import { serviceList } from "../store/service.data";

// first find elligible services meeting the users desire
// get the base score (the rating for the desire)
// and add the limitation score (meeting the users limitations)
export const getElligibleServices = (desire, limitations) => {
  const selectedLimitations = limitations.filter(limit => {
    return limit.selected;
  });

  const formattedServices = serviceList
    .map(service => {
      let baseScore = 0;
      if (service.desireRatings[desire]) {
        baseScore = service.desireRatings[desire];
      }
      const limitationScore = calculateScore(
        service,
        selectedLimitations
      );
      return {
        ...service,
        score: Math.round((limitationScore + baseScore) * 10) / 10
      };
    })
    .map(service => {
      let isElligible = desire in service.desireRatings;
      if (isElligible) {
        selectedLimitations.forEach(limit => {
          if (!service.limitationRatings[limit.id]) {
            isElligible = false;
          }
        });
      }
      return {
        score: service.score,
        name: service.name,
        description: service.description,
        elligible: isElligible
      };
    });

  const services = serviceList
    .filter(service => {
      return desire in service.desireRatings;
    })
    .filter(service => {
      let meetsLimits = true;
      selectedLimitations.forEach(limit => {
        if (!service.limitationRatings[limit.id]) {
          meetsLimits = false;
        }
      });
      return meetsLimits;
    })
    .map(service => {
      let baseScore = 0;
      if (service.desireRatings[desire]) {
        baseScore = service.desireRatings[desire];
      }
      const limitationScore = calculateScore(
        service,
        selectedLimitations
      );
      return {
        name: service.name,
        description: service.description,
        score: Math.round((limitationScore + baseScore) * 10) / 10
      };
    });

  return sortByRating(formattedServices);
};

const sortByRating = services => {
  return services.sort(
    (a, b) =>
      b.elligible - a.elligible ||
      parseFloat(b.score) - parseFloat(a.score)
  );
};

const calculateScore = (service, limitations) => {
  let score = 0;
  let value = 0;
  limitations.forEach(lim => {
    if ((value = service.limitationRatings[lim.id])) {
      score += value;
    }
  });

  return score;
};
