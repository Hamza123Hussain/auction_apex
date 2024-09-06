export const isAuctionStarted = (startDate: string) => {
  const now = new Date()
  const start = new Date(startDate)
  return now >= start
}
