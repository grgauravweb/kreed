import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 16,  
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
   
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
  headerIcons: {
    flexDirection: "row",
  },
  card: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,           // Border width
    borderColor: 'gray',   // Border color
    borderRadius: 10,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileText: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  details: {
    flexDirection: "row",
    marginTop: 5,
    gap:2,
  },
  date: {
    color: "#aaaaaa",
    fontSize: 12,
    marginLeft: 2,
  },
  location: {
    color: "#aaaaaa",
    fontSize: 12,
  },
  scores: {
    marginTop: 20,
  },
  scoreCard: {
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "center",
  },
  cardData: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  teamText: {
    color: "#ffffff",
    fontSize: 12,
    flex: 1,
    textAlign: "center",
  },
  vsText: {
    color: "#66ff66",
    fontSize: 16,
    marginHorizontal: 5,
  },
  avatarbg:{
    width:35,                
    height: 35,              
    backgroundColor: 'gray',
    justifyContent: 'center',
    textAlign:"center",
    alignItems:'center',
    borderRadius: 50,
  },

  score: {
    flexDirection: "row",
    alignItems: "center",
  },
  scoreText: {
    color: "#66ff66",
    fontSize: 24,
    marginHorizontal: 10,
  },
  matchImage: {
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
  description: {
    color: "#aaaaaa",
    fontSize: 14,
    marginTop: 10,
  },
  more: {
    color: "#66ff66",
    fontWeight: "bold",
    fontSize: 12
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#444',
    borderRadius: 8,
  },
  iconText: {
    color: '#fff',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
});
