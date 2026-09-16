import { Ionicons } from '@expo/vector-icons';
import { Image, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { EventItem, useEventContext } from '../../context/EventContext';

export default function FeedScreen() {
  const events: EventItem[] = [
    {
      id: 'e1',
      title: 'DCE KAMUSTAHAN 2026',
      location: 'UM Visayan',
      date: 'Oct 24, 3:00 PM',
      isOffline: true,
      organizer: 'Department of Computing Education',
      eventImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'e2',
      title: 'Campus Career Fair',
      location: 'University Sports Hall',
      date: 'Nov 2, 9:00 AM',
      isOffline: true,
      organizer: 'UMTC Alumini Association',
      eventImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'e3',
      title: 'AI Guest Lecture',
      location: 'Room 304 B1',
      date: 'Nov 10, 1:00 PM',
      isOffline: true,
      organizer: 'DCE Faculty',
      eventImage: 'https://images.unsplash.com/photo-1475721025599-590528b33fac?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="menu-outline" size={26} color="#111" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Campus Events</Text>
          <TouchableOpacity style={styles.iconButton}>
            <View style={styles.notificationBadge} />
            <Ionicons name="notifications-outline" size={24} color="#111" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            placeholder="Search offline events..."
            placeholderTextColor="#888"
            style={styles.searchInput}
          />
        </View>

        {/* Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>Upcoming</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Offline</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Saved</Text>
          </TouchableOpacity>
        </View>

        {/* Feed Posts */}
        <View style={styles.feedContainer}>
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function EventCard({ event }: { event: EventItem }) {
  const { joinEvent, leaveEvent, isJoined } = useEventContext();
  const joined = isJoined(event.id);

  return (
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
        <View style={styles.postMeta}>
          <Text style={styles.postName}>{event.title}</Text>
          <Text style={styles.organizerName}>by {event.organizer}</Text>
        </View>
        <TouchableOpacity style={styles.bookmarkButton}>
          <Ionicons name="bookmark-outline" size={22} color="#A0A0A0" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.9}>
        <Image source={{ uri: event.eventImage }} style={styles.postImage} />
      </TouchableOpacity>

      <View style={styles.eventDetails}>
        <View style={styles.eventDetailRow}>
          <Ionicons name="calendar-outline" size={16} color="#208AEF" />
          <Text style={styles.eventDetailText}>{event.date}</Text>
        </View>
        <View style={styles.eventDetailRow}>
          <Ionicons name="location-outline" size={16} color="#208AEF" />
          <Text style={styles.eventDetailText}>{event.location}</Text>
        </View>

        {event.isOffline && (
          <View style={styles.offlineBadge}>
            <Ionicons name="wifi-outline" size={12} color="#FFF" />
            <Text style={styles.offlineBadgeText}>Offline Event</Text>
          </View>
        )}

        <TouchableOpacity
          style={[styles.joinButton, joined && styles.joinedButton]}
          onPress={() => joined ? leaveEvent(event.id) : joinEvent(event)}
        >
          <Text style={[styles.joinButtonText, joined && styles.joinedButtonText]}>
            {joined ? 'Joined' : 'Join Event'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 10,
    right: 12,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF3B30',
    zIndex: 1,
    borderWidth: 1,
    borderColor: '#F5F5F5',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EBEBEB',
    marginHorizontal: 20,
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 20,
    height: 48,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#333',
    height: '100%',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#208AEF',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#A0A0A0',
  },
  activeTabText: {
    color: '#FFF',
  },
  feedContainer: {
    paddingHorizontal: 20,
    gap: 20,
  },
  postCard: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  postMeta: {
    flex: 1,
  },
  postName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
    marginBottom: 4,
  },
  organizerName: {
    fontSize: 13,
    color: '#777',
    fontWeight: '500',
  },
  bookmarkButton: {
    padding: 4,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    backgroundColor: '#F0F0F0',
    marginBottom: 16,
  },
  eventDetails: {
    gap: 8,
  },
  eventDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventDetailText: {
    fontSize: 14,
    color: '#555',
    marginLeft: 8,
    fontWeight: '500',
  },
  offlineBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  offlineBadgeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
  joinButton: {
    backgroundColor: '#208AEF',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  joinedButton: {
    backgroundColor: '#EBEBEB',
  },
  joinButtonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '700',
  },
  joinedButtonText: {
    color: '#555',
  }
});
