import StatisticLine from "./statisticLine";

const Statistics = ({ goodCount, neutralCount, badCount }) => {
  const totalCount = goodCount + neutralCount + badCount;
  const averageCount = (goodCount * 1 + badCount * -1) / totalCount;
  const positiveCount = (goodCount / totalCount) * 100;

  return (
    <table>
      <tbody>
        <StatisticLine label="good" value={goodCount} />
        <StatisticLine label="neutral" value={neutralCount} />
        <StatisticLine label="bad" value={badCount} />
        <StatisticLine label="all" value={totalCount} />
        <StatisticLine label="average" value={averageCount} />
        <StatisticLine label="positive" value={`${positiveCount}%`} />
      </tbody>
    </table>
  );
};

export default Statistics;
